# 🚀 FINT Project - Deployment Checklist

## ✅ What's Ready for Render Deployment (Option 1)

### Backend Service Updates
- [x] ES6 module imports fixed
- [x] MongoDB connection handles gracefully
- [x] Email service (Gmail SMTP) verified
- [x] Fallback storage implemented
- [x] CORS enabled
- [x] Error handling in place

**Backend Location:** `/backend`  
**Build Command:** `cd backend && npm install`  
**Start Command:** `cd backend && npm start`  
**Port:** 5000

---

### Frontend Service Updates  
- [x] React + Vite properly configured
- [x] API URL uses environment variables
- [x] Environment variable: `VITE_API_URL`
- [x] Start script added for Render
- [x] Bootstrap & React Router configured
- [x] All components working

**Frontend Location:** `/my-react-app`  
**Build Command:** `cd my-react-app && npm install && npm run build`  
**Start Command:** `cd my-react-app && npm start`  
**Port:** 3000 (preview mode)

---

## 📋 Render Dashboard Setup (Step-by-Step)

### Step 1️⃣: Deploy Backend
```
Service Name: fint-backend
Repository: nish272/fint
Build Command: cd backend && npm install
Start Command: cd backend && npm start

Environment Variables:
- MONGO_URI=mongodb+srv://...
- EMAIL_USER=astonovabiotech@gmail.com
- EMAIL_PASS=toxh nilt vjud ltgh
- NODE_ENV=production
```

⏳ Wait for backend to deploy → Get URL like: `https://fint-backend.onrender.com`

---

### Step 2️⃣: Deploy Frontend
```
Service Name: fint-frontend
Repository: nish272/fint
Build Command: cd my-react-app && npm install && npm run build
Start Command: cd my-react-app && npm start

Environment Variables:
- VITE_API_URL=https://fint-backend.onrender.com (Replace with actual URL from Step 1)
- NODE_ENV=production
```

⏳ Wait for frontend to deploy → Get URL like: `https://fint-frontend.onrender.com`

---

## 🧪 Post-Deployment Testing

### Test 1: Backend API is working
```bash
curl https://fint-backend.onrender.com/api/contacts
```
Expected: Empty array `[]` or list of contacts

### Test 2: Frontend loads
Visit: `https://fint-frontend.onrender.com`  
Expected: Home page loads with navigation

### Test 3: Contact Form Works
1. Go to Contact page
2. Fill form: Name, Phone, Message
3. Submit
4. Check email (astonovabiotech@gmail.com) for incoming email

---

## 📦 Files Modified for Deployment

```
✅ my-react-app/src/api/contactApi.js
   → Updated to use VITE_API_URL environment variable

✅ my-react-app/package.json
   → Added "start" script for production

✅ my-react-app/.env.example
   → Created for reference (not needed in repo)

✅ RENDER_DEPLOYMENT_GUIDE.md
   → Complete step-by-step instructions
```

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| `package.json not found` | Make sure Build Command has `cd backend` or `cd my-react-app` |
| `Cannot find module 'express'` | Backend: Run `npm install` |
| `VITE_API_URL undefined` | Add to Environment Variables in Render |
| `Cannot connect to MongoDB` | Check MONGO_URI and verify MongoDB Atlas whitelist |
| `Email not sending` | Verify EMAIL_USER and EMAIL_PASS are correct |

---

## 🎯 Final Deployment URLs

Once both services are deployed:

| Service | URL |
|---------|-----|
| **Frontend** | `https://fint-frontend.onrender.com` |
| **Backend API** | `https://fint-backend.onrender.com` |
| **API Endpoint** | `https://fint-backend.onrender.com/api/contact` |

---

## ✨ What Each Service Does

### Backend (fint-backend)
- Receives contact form submissions
- Sends emails via Gmail SMTP
- Stores contacts in MongoDB (with fallback)
- Provides REST API endpoints

### Frontend (fint-frontend)
- Displays website (Home, About, Products, Contact)
- Submits contact forms to backend
- Displays response messages
- Production-optimized Vite build

---

## 📝 Remember

- ✅ Push all changes to GitHub first
- ✅ Deploy backend BEFORE frontend (to get backend URL)
- ✅ Update frontend's VITE_API_URL with actual backend URL
- ✅ Both services need environment variables set correctly
- ✅ MongoDB Atlas must whitelist Render's IP

---

## 🚀 Start Deploying!

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → Select **"Web Service"**
3. Connect your GitHub repository
4. Follow the checklist above
5. Deploy backend first, then frontend

**Happy Deploying!** 🎉
