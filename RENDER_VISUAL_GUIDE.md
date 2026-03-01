# 🎬 FINT Render Deployment - Visual Step-by-Step Guide

> **Everything is ready!** Just follow these visual steps.

---

## 📍 STEP 1: Deploy Backend Service

### 1️⃣ Open Render Dashboard
- Go to: **https://dashboard.render.com/**
- Sign in with GitHub account

### 2️⃣ Create New Web Service
```
Click: [New +] button (top right)
      ↓
Select: Web Service
      ↓
Connect GitHub
```

### 3️⃣ Select Your Repository
```
Search: nish272/asta_nova
Select: Repository
Branch: main
Click: [Connect]
```

### 4️⃣ Fill Service Configuration

**Field 1: Service Name**
```
Name: fint-backend
```

**Field 2: Build Command**
```
cd backend && npm install
```

**Field 3: Start Command**
```
cd backend && npm start
```

### 5️⃣ Add Environment Variables
```
Click: [Advanced] (scroll down)
      ↓
Click: [Add Environment Variable] button
```

**Add 4 variables:**

```
Variable 1:
Key: MONGO_URI
Value: mongodb+srv://msnisha7310_db_user:PTYYHWS8Kgpqf7zJ@cluster0.oku01o8.mongodb.net/?appName=Cluster0

Variable 2:
Key: EMAIL_USER
Value: astonovabiotech@gmail.com

Variable 3:
Key: EMAIL_PASS
Value: toxh nilt vjud ltgh

Variable 4:
Key: NODE_ENV
Value: production
```

### 6️⃣ Deploy
```
Click: [Create Web Service] button
      ↓
⏳ Wait for deployment (3-5 minutes)
      ↓
Watch logs - should see:
"Server running on port 5000"
```

### 7️⃣ Get Backend URL
```
At top of page, copy the URL:
https://fint-backend.onrender.com

⚠️ SAVE THIS URL - You need it for Step 2!
```

✅ **Backend Deployed!**

---

## 📍 STEP 2: Deploy Frontend Service

### 1️⃣ Create Another Web Service
```
Click: [New +] button again
      ↓
Select: Web Service
      ↓
Connect same repository: nish272/asta_nova
Branch: main
```

### 2️⃣ Fill Service Configuration

**Field 1: Service Name**
```
Name: fint-frontend
```

**Field 2: Build Command**
```
cd my-react-app && npm install && npm run build
```

**Field 3: Start Command**
```
cd my-react-app && npm start
```

### 3️⃣ Add Environment Variables
```
Click: [Advanced]
      ↓
Click: [Add Environment Variable]
```

**Add 2 variables:**

```
Variable 1:
Key: VITE_API_URL
Value: https://fint-backend.onrender.com

⚠️ REPLACE with the URL you saved from Step 1!

Variable 2:
Key: NODE_ENV
Value: production
```

### 4️⃣ Deploy
```
Click: [Create Web Service]
      ↓
⏳ Wait for deployment (5-10 minutes)
      ↓
Watch logs - should see build completion
```

### 5️⃣ Get Frontend URL
```
At top of page, your frontend URL:
https://fint-frontend.onrender.com
```

✅ **Frontend Deployed!**

---

## 🧪 Test Your Deployment

### Test 1: Check Backend is Running
```bash
curl https://fint-backend.onrender.com/api/contacts
```
**Expected:** `[]` or array of contacts

### Test 2: Visit Frontend
```
Open browser: https://fint-frontend.onrender.com
```
**Expected:** Home page loads with navigation

### Test 3: Test Contact Form
```
1. Click: Contact page
2. Fill: 
   - Name: Your Name
   - Phone: 555-1234
   - Message: Testing form
3. Click: Submit
4. Should see: "Message received"
5. Check email: astonovabiotech@gmail.com
   (should have new email notification)
```

---

## 🎯 Your Final URLs

After deployment completes:

```
📍 Frontend:  https://fint-frontend.onrender.com
📍 Backend:   https://fint-backend.onrender.com
📍 API:       https://fint-backend.onrender.com/api/contact
```

---

## ⚠️ Important Notes

### Cold Start (Free Tier)
- First request after 15+ min of inactivity = 20-30s wait
- To avoid: Upgrade to Paid Plan

### Auto-Deploy
- Every push to `main` branch = automatic redeployment
- Changes take 3-10 min to live

### If Deployment Fails
Check logs in Render dashboard - most common errors:
```
1. "cd backend &&" missing from Build Command
2. VITE_API_URL not set in Frontend env vars
3. Wrong Backend URL in VITE_API_URL
```

---

## ✨ Success Checklist

After deployment:

- [ ] Backend service shows "Running" (green status)
- [ ] Frontend service shows "Running" (green status)
- [ ] Both have service URLs
- [ ] Backend responds to `/api/contacts` endpoint
- [ ] Frontend page loads without errors
- [ ] Contact form submits successfully
- [ ] Email received in inbox

---

## 🎉 Done!

```
✅ Backend deployed
✅ Frontend deployed
✅ Environment variables configured
✅ Auto-deploy enabled
✅ Ready for production!
```

**Your FINT app is now LIVE on Render! 🚀**

---

## 💡 Quick Help

**Problem:** "Cannot find module"  
**Solution:** Check Build Command has correct `cd` path

**Problem:** CORS errors  
**Solution:** Backend CORS is enabled, check VITE_API_URL

**Problem:** No emails sending  
**Solution:** Verify EMAIL_USER and EMAIL_PASS env vars

**Problem:** Slow first load  
**Solution:** Free tier spins down - upgrade to paid if needed

---

## 📞 Support

- Check `RENDER_DEPLOYMENT_GUIDE.md` for detailed config
- Check `DEPLOY_NOW.md` for quick checklist
- GitHub: https://github.com/nish272/asta_nova
