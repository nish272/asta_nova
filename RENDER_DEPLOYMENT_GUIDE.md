# Render Deployment Guide - Option 1: Separate Services

## Services to Deploy

### Service 1: Backend (Node.js + Express)
### Service 2: Frontend (React + Vite)

---

## Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account with the `fint` repository pushed
- Render.com account connected to GitHub
- Both services configured in Render dashboard

---

## ✅ Service 1: Backend Deployment

### 1. Create Backend Service on Render

1. Go to **[Render Dashboard](https://dashboard.render.com/)**
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository (`nish272/fint`)

### 2. Configure Backend Service

**Service Name:** `fint-backend`

**Settings:**
- **Environment:** Node
- **Build Command:** 
  ```
  cd backend && npm install
  ```
- **Start Command:** 
  ```
  cd backend && npm start
  ```
- **Root Directory:** (Leave blank - will auto-detect from build command)

### 3. Add Environment Variables

In Render dashboard → **Settings** → **Environment**:

```
MONGO_URI=mongodb+srv://msnisha7310_db_user:PTYYHWS8Kgpqf7zJ@cluster0.oku01o8.mongodb.net/?appName=Cluster0
EMAIL_USER=astonovabiotech@gmail.com
EMAIL_PASS=toxh nilt vjud ltgh
NODE_ENV=production
```

### 4. Deploy

- Click **"Create Web Service"**
- Wait for build to complete (~3-5 minutes)
- Under **Service URL** you'll see: `https://fint-backend.onrender.com`
- **Copy this URL** - you'll need it for frontend

⚠️ **Note Down:** Backend URL = `https://fint-backend.onrender.com`

---

## ✅ Service 2: Frontend Deployment

### 1. Create Frontend Service on Render

1. Go to **[Render Dashboard](https://dashboard.render.com/)**
2. Click **"New +"** → **"Web Service"**
3. Connect same repository (`nish272/fint`)

### 2. Configure Frontend Service

**Service Name:** `fint-frontend`

**Settings:**
- **Environment:** Node
- **Build Command:** 
  ```
  cd my-react-app && npm install && npm run build
  ```
- **Start Command:** 
  ```
  cd my-react-app && npm start
  ```
- **Root Directory:** (Leave blank)

### 3. Add Environment Variables

In Render dashboard → **Settings** → **Environment**:

Replace `YOUR_BACKEND_URL` with the Backend service URL from Step 1:

```
VITE_API_URL=https://fint-backend.onrender.com
NODE_ENV=production
```

### 4. Deploy

- Click **"Create Web Service"**
- Wait for build to complete (~5-10 minutes)
- Your frontend will be available at: `https://fint-frontend.onrender.com`

---

## 🔗 Connecting Frontend to Backend

**Frontend service** will automatically use the backend URL from:
```
VITE_API_URL=https://fint-backend.onrender.com
```

This is set in `.env.local` during Render's build process.

---

## 📋 Deployment Checklist

### Before Deploying:
- [ ] Backend `.env` file has correct MongoDB URI
- [ ] Email credentials configured in Backend `.env`
- [ ] Frontend has `VITE_API_URL` environment variable set
- [ ] Repository pushed to GitHub with all files

### During Deployment:
- [ ] Backend service builds successfully ✓
- [ ] Backend service starts without errors ✓
- [ ] Frontend service builds successfully ✓
- [ ] Frontend service starts without errors ✓

### After Deployment:
- [ ] Test backend: `https://fint-backend.onrender.com/api/contacts`
- [ ] Test frontend contact form at: `https://fint-frontend.onrender.com`
- [ ] Verify emails are being sent

---

## 🛠️ Troubleshooting

### Backend Service Issues

**Build Fails:**
```
Error: Cannot find module
```
**Fix:** Ensure `cd backend &&` is in your Build Command

**Service Won't Start:**
```
Cannot connect to MongoDB
```
**Fix:** Check MONGO_URI and verify MongoDB Atlas IP whitelist

---

### Frontend Service Issues

**Environment Variable Not Found:**
```
VITE_API_URL is undefined
```
**Fix:** Add `VITE_API_URL` to Environment Variables in Render dashboard

**Build Fails with "vite not found":**
```
npm ERR! code ENOENT
```
**Fix:** Ensure `cd my-react-app &&` is in your Build Command

---

## 📊 Service URLs

Once deployed, you'll have:

| Service | URL | Purpose |
|---------|-----|---------|
| Backend API | `https://fint-backend.onrender.com` | REST API endpoints |
| Frontend Web | `https://fint-frontend.onrender.com` | React application |
| Contact API | `https://fint-backend.onrender.com/api/contact` | POST contact form |
| Contacts List | `https://fint-backend.onrender.com/api/contacts` | GET all contacts |

---

## 🔄 Redeployment

To redeploy after making changes:

1. Push changes to GitHub `main` branch
2. Go to Render dashboard
3. Click the service → **"Manual Deploy"** or wait for auto-deploy

For automatic deployments on every push, enable:
- Render Dashboard → Service Settings → **Auto-Deploy** = "Yes"

---

## 📞 API Testing After Deployment

### Test Backend Connectivity:
```bash
curl https://fint-backend.onrender.com/api/contacts
```

### Test Contact Form Submission:
```bash
curl -X POST https://fint-backend.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"555-0000","message":"Hello"}'
```

### Expected Response:
```json
{"success":true,"message":"Message received"}
```

---

## ⚡ Performance Notes

- **Free Tier:** Services spin down after 15 minutes of inactivity
- **First Request:** May take 10-30 seconds (spin-up time)
- **For Production:** Upgrade to Paid Plan to avoid spin-down

---

## 🎯 Summary

✅ Backend deployed at: `https://fint-backend.onrender.com`  
✅ Frontend deployed at: `https://fint-frontend.onrender.com`  
✅ API calls automatically route to backend  
✅ Emails sent via Gmail SMTP  
✅ Database connected via MongoDB Atlas  

**Your full-stack app is now live! 🚀**
