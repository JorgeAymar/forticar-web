# Forticar Web - Next.js 16

Plataforma SaaS integral para la administración y optimización de talleres mecánicos.
Sitio web construido con **Next.js 16**, **Tailwind CSS v4** y **React 19**.

URL de Producción: [https://forticar.labshub.cc](https://forticar.labshub.cc)

## 🚀 Requisitos Previos

- **Node.js**: v20+
- **Docker**: Para despliegue en contenedores.
- **Nginx**: Para configurar el proxy inverso.

## 🛠️ Desarrollo Local

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz:
    ```env
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/forticar"
    PORT=3000
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 🐳 Despliegue con Docker

El proyecto incluye un `Dockerfile` optimizado para producción utilizando Next.js Standalone mode.

### 1. Construir la Imagen
```bash
docker build -t forticar-web .
```

### 2. Ejecutar el Contenedor
```bash
docker run -d \
  --name forticar-web \
  --restart unless-stopped \
  -p 3000:3000 \
  forticar-web
```

---

## 🌐 Configuración de Nginx (Reverse Proxy)

Para servir la aplicación bajo un dominio (ej. `forticar.labshub.cc`) usando HTTPS.

1.  **Crear archivo de configuración:**
    `/etc/nginx/sites-available/forticar.labshub.cc`

    ```nginx
    server {
        server_name forticar.labshub.cc;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        # (Opcional) La configuración SSL será gestionada por Certbot
        listen 80;
    }
    ```

2.  **Activar el sitio:**
    ```bash
    ln -sf /etc/nginx/sites-available/forticar.labshub.cc /etc/nginx/sites-enabled/
    nginx -t
    systemctl reload nginx
    ```

3.  **Certificado SSL (Certbot):**
    ```bash
    certbot --nginx -d forticar.labshub.cc
    ```

---

## 🔄 Guía de Actualización (Update Workflow)

Para actualizar la aplicación en el servidor con los últimos cambios del repositorio.

### Opción A: Script Automático (Desde tu máquina local)
Si tienes el script `deploy.expect` configurado:
```bash
./deploy.expect
```

### Opción B: Actualización Manual (En el servidor)

1.  **Conectarse al servidor:**
    ```bash
    ssh usuario@tu-servidor
    cd ~/forticar-web
    ```

2.  **Descargar últimos cambios:**
    Si usaste git en el servidor:
    ```bash
    git pull origin main
    ```
    *Si subiste los archivos manualmente (SCP/Tar), reemplaza la carpeta con la nueva versión.*

3.  **Reconstruir y Reiniciar:**
    ```bash
    # Construir nueva imagen
    docker build -t forticar-web .

    # Detener contenedor anterior
    docker stop forticar-web
    docker rm forticar-web

    # Iniciar nuevo contenedor
    docker run -d --name forticar-web --restart unless-stopped -p 3000:3000 forticar-web
    ```
