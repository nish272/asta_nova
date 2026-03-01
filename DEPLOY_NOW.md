# 🚀 FINT Full-Stack App - Render Deploy Instructions

**Repository:** https://github.com/nish272/asta_nova  
**Status:** ✅ Ready to Deploy

---

## 📋 Quick Deploy Checklist

- [x] Frontend & Backend code ready
- [x] Environment variables configured
- [x] GitHub repo updated (main branch)
- [x] API URLs using environment variables

---

## 🎯 Deploy in 10 Minutes

### **Phase 1: Deploy Backend (5 min)**

1. Go to: https://dashboard.render.com/
2. Click **"New +"** → **"Web Service"**
3. Connect GitHub repo: **nish272/asta_nova** → Select **main** branch
4. Fill form:
   ```
   Service Name: fint-backend
   Build Command: cd backend && npm install
   Start Command: cd backend && npm start
   ```

5. **Click "Advanced"** → Add these **Environment Variables:**
   ```
   MONGO_URI = mongodb+srv://msnisha7310_db_user:PTYYHWS8Kgpqf7zJ@cluster0.oku01o8.mongodb.net/?appName=Cluster0
   EMAIL_USER = astonovabiotech@gmail.com
   EMAIL_PASS = toxh nilt vjud ltgh
   NODE_ENV = production
   ```

6. Click **"Create Web Service"**
7. ⏳ **Wait for deployment** (Watch logs, should say "Server running on port 5000")
8. **📍 Copy Backend URL** from top of page (format: `https://fint-backend.onrender.com`)

---

### **Phase 2: Deploy Frontend (5 min)**

1. From Render Dashboard, click **"New +"** → **"Web Service"** again
2. Same repo: **nish272/asta_nova** → **main** branch
3. Fill form:
   ```
   Service Name: fint-frontend
   Build Command: cd my-react-app && npm install && npm run build
   Start Command: cd my-react-app && npm start
   ```

4. **Click "Advanced"** → Add this **Environment Variable:**
   ```
   VITE_API_URL = https://fint-backend.onrender.com
   NODE_ENV = production
   ```
   
   ⚠️ **IMPORTANT:** Replace `fint-backend.onrender.com` with the actual URL from Phase 1!

5. Click **"Create Web Service"**
6. ⏳ **Wait for deployment** (Takes longer due to React build)
7. ✅ **Get Frontend URL** (format: `https://fint-frontend.onrender.com`)

---

## ✅ Post-Deployment Testing

### Test 1: Backend is responding
```bash
curl https://fint-backend.onrender.com/api/contacts
```
Expected: `[]` or array of contacts

### Test 2: Frontend loads
Visit: `https://fint-frontend.onrender.com`  
Expected: Home page with navbar loads

### Test 3: Contact Form Works
1. Go to `/contact` page
2. Fill: Name, Phone, Message
3. Click Submit
4. Check email: `astonovabiotech@gmail.com` for test email

---

## 🔍 Troubleshooting

### ❌ Backend won't build
**Error:** "Cannot find module"
**Fix:** Check Build Command has `cd backend &&`

### ❌ Frontend won't build
**Error:** "VITE_API_URL is undefined"
**Fix:** Add to Environment Variables in Frontend service

### ❌ Contact form not working
**Error:** CORS error in console
**Fix:** Backend CORS is enabled, check frontend VITE_API_URL env var

### ❌ Emails not sending
**Error:** "Email sending error"
**Fix:** Verify EMAIL_USER and EMAIL_PASS in backend env vars

---

## 📊 Final URLs

After both deploy successfully:

| Service | URL |
|---------|-----|
| Frontend | `https://fint-frontend.onrender.com` |
| Backend | `https://fint-backend.onrender.com` |
| API Endpoint | `https://fint-backend.onrender.com/api/contact` |

---

## ⚡ Important Info

- **Free Tier:** Spins down after 15 min inactivity (cold start takes 20-30s)
- **Auto-Deploy:** ON by default - pushes to main = auto redeploy
- **Database:** MongoDB Atlas (already configured)
- **Email:** Gmail SMTP (already configured)

---

## 🎉 You're All Set!

```
✅ Code ready
✅ GitHub synced
✅ Environment vars configured
✅ Render deployment instructions ready

Next: Deploy on Render Dashboard!
```

**Questions?** Check `RENDER_DEPLOYMENT_GUIDE.md` for detailed instructions.
