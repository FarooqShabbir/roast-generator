# 🔥 The Roast Generator - Frontend App

A hilarious, interactive frontend application that teases users with personalized roasts. Built with vanilla HTML, CSS, and JavaScript, containerized with Docker, and deployed with GitLab CI/CD.

## 🎨 Features

- **Interactive UI** - Funny, teasing roasts based on user input
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Beautiful Animations** - Smooth transitions and eye-catching effects
- **Zero Dependencies** - Pure HTML/CSS/JavaScript (no frameworks needed)
- **Docker Ready** - Pre-configured for containerization
- **CI/CD Pipeline** - Automatic build and push to Docker Hub on every commit

## 🚀 Quick Start (Local)

### Prerequisites
- Docker and Docker Compose installed
- Git installed

### Option 1: Using Docker Compose (Easiest)

```bash
# Clone the repository
git clone https://your-gitlab-repo-url.git
cd roast-generator

# Start the app
docker-compose up

# Visit http://localhost:8080
```

### Option 2: Manual Docker Build

```bash
# Build the image
docker build -t roast-generator:latest .

# Run the container
docker run -p 8080:80 roast-generator:latest

# Visit http://localhost:8080
```

### Option 3: Run Locally (Development)

Simply open `index.html` in your browser - no server required!

```bash
# Linux/Mac
open index.html

# Windows
start index.html
```

## 📋 Project Structure

```
roast-generator/
├── index.html              # Main HTML file
├── styles.css              # Styles and animations
├── script.js               # Roasting logic
├── Dockerfile              # Container configuration
├── docker-compose.yml      # Local development setup
├── nginx.conf              # Web server config
├── .gitlab-ci.yml          # CI/CD pipeline
├── .dockerignore            # Docker ignore rules
└── README.md               # This file
```

## 🐳 Docker Hub Deployment

### Setup (One-time)

1. **Create Docker Hub Account**
   - Go to https://hub.docker.com
   - Sign up for a free account
   - Create a new public repository called `roast-generator`

2. **Setup GitLab CI/CD Variables**
   - Go to your GitLab project
   - Navigate to **Settings → CI/CD → Variables**
   - Add these variables:
     - `DOCKER_HUB_USERNAME` - Your Docker Hub username
     - `DOCKER_HUB_PASSWORD` - Your Docker Hub password (or access token)
     - `DEPLOY_SERVER` - (Optional) Your server IP for deployment
     - `DEPLOY_USER` - (Optional) SSH user for deployment
     - `SSH_PRIVATE_KEY` - (Optional) Base64-encoded SSH key for deployment

3. **Enable Docker Runner**
   - Install GitLab Runner with Docker support
   - Or ensure your project uses GitLab's shared runners

### Auto-Deployment Workflow

1. **Push to GitLab**
   ```bash
   git add .
   git commit -m "Update roast generator"
   git push origin main
   ```

2. **Pipeline Runs Automatically**
   - GitLab detects the push
   - `.gitlab-ci.yml` triggers the pipeline
   - Docker image is built and tested
   - Image is pushed to Docker Hub with:
     - `latest` tag (always the newest version)
     - Commit SHA tag (for version tracking)

3. **Access Your Image**
   ```bash
   docker pull yourusername/roast-generator:latest
   docker run -p 8080:80 yourusername/roast-generator:latest
   ```

## 🔧 CI/CD Pipeline Stages

### Stage 1: Build
- Builds Docker image locally
- Validates Dockerfile syntax
- Runs only on `main` and `develop` branches

### Stage 2: Push
- Logs into Docker Hub
- Pushes image with commit SHA tag
- Pushes image with `latest` tag
- Runs only on `main` branch

### Stage 3: Deploy (Optional)
- SSH into your server
- Pulls latest image
- Restarts container with `docker-compose`
- Requires manual trigger

## 📝 Customize Roasts

Edit `script.js` to add your own roasts:

```javascript
// Add to the roasts object
const roasts = {
    universal: [
        "Your custom roast here!",
        // ... more roasts
    ],
    hobby: {
        sleep: [
            "Your custom sleep roast!",
        ]
    }
    // ... more categories
};
```

## 🎯 Environment Variables (CI/CD)

| Variable | Purpose | Example |
|----------|---------|---------|
| `DOCKER_HUB_USERNAME` | Docker Hub login | `johndoe` |
| `DOCKER_HUB_PASSWORD` | Docker Hub password/token | `****` |
| `DEPLOY_SERVER` | Server IP for deployment | `192.168.1.100` |
| `DEPLOY_USER` | SSH user | `root` |
| `SSH_PRIVATE_KEY` | Base64-encoded SSH key | Base64 string |

## 🌐 Deploy to Production Server

### Using Docker Compose on Server

1. **SSH into your server**
   ```bash
   ssh user@your-server.com
   ```

2. **Create directory and pull image**
   ```bash
   mkdir -p /opt/roast-generator
   cd /opt/roast-generator
   
   # Create docker-compose.yml (same as repo)
   # Or pull from repo: git clone ...
   
   docker-compose up -d
   ```

3. **Access your app**
   - Visit `http://your-server.com:8080`
   - Or use Nginx reverse proxy for port 80

### Using Systemd to Keep Container Running

Create `/etc/systemd/system/roast-generator.service`:
```ini
[Unit]
Description=Roast Generator Docker Container
After=docker.service
Requires=docker.service

[Service]
Type=simple
WorkingDirectory=/opt/roast-generator
ExecStart=/usr/bin/docker-compose up
ExecStop=/usr/bin/docker-compose down
Restart=always

[Install]
WantedBy=multi-user.target
```

Then:
```bash
sudo systemctl enable roast-generator
sudo systemctl start roast-generator
sudo systemctl status roast-generator
```

## 🧪 Testing

### Local Testing
```bash
# Build and test locally
docker build -t roast-generator:test .
docker run -p 3000:80 roast-generator:test
```

### Verify Container Health
```bash
# Check if container is running
docker ps | grep roast-generator

# Check logs
docker logs roast-generator-app

# Test the endpoint
curl http://localhost:8080
```

## 📊 Monitor Deployments

### Check Pipeline Status
- Go to GitLab project
- **CI/CD → Pipelines**
- Click on pipeline to see detailed logs
- Check each stage (build, push, deploy)

### View Docker Hub
- Go to https://hub.docker.com
- Navigate to your repository
- See image tags and pull counts

## 🛠️ Troubleshooting

### Docker Build Fails
```bash
# Check Dockerfile syntax
docker build --no-cache -t roast-generator .

# Check if port is in use
lsof -i :8080
```

### Pipeline Not Running
- Check `.gitlab-ci.yml` syntax (use GitLab CI Lint)
- Ensure you have a runner configured
- Check project CI/CD settings

### Can't Push to Docker Hub
- Verify credentials in GitLab variables
- Check Docker Hub account hasn't hit rate limits
- Try pulling: `docker pull yourusername/roast-generator`

## 📚 Useful Commands

```bash
# List all Docker images
docker images | grep roast

# Remove old images
docker rmi roast-generator:old-tag

# Clean up unused Docker objects
docker system prune

# View container logs in real-time
docker logs -f roast-generator-app

# Shell into running container
docker exec -it roast-generator-app sh
```

## 🎉 Next Steps

1. ✅ Set up GitLab CI/CD variables
2. ✅ Push code to GitLab (triggers pipeline)
3. ✅ Monitor pipeline execution
4. ✅ Verify image on Docker Hub
5. ✅ Deploy to production server
6. ✅ Share with friends and enjoy! 🔥

## 📄 License

MIT - Feel free to use, modify, and distribute

## 🤝 Contributing

Found a funny roast? Want to improve the UI? Submit a pull request!

---

**Made with ❤️ and a lot of sass | No feelings were permanently hurt**
