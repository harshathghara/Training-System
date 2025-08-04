# Environment Variables Setup Guide

## 🔧 **Step 1: Create .env.local File**

Create a file named `.env.local` in your project root with the following content:

```bash
# Google OAuth Configuration
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-actual-google-client-id-here

# Backend Configuration
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

# Database Configuration (if needed)
DATABASE_URL=your-database-url-here
```

## 🔑 **Step 2: Get Your Google OAuth Client ID**

1. **Go to Google Cloud Console:** https://console.cloud.google.com/
2. **Create OAuth 2.0 Credentials** (follow the guide in `GOOGLE_OAUTH_SETUP.md`)
3. **Copy your Client ID** (looks like: `123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com`)

## 📝 **Step 3: Update .env.local**

Replace `your-actual-google-client-id-here` with your real Client ID:

```bash
# Google OAuth Configuration
NEXT_PUBLIC_GOOGLE_CLIENT_ID=123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com

# Backend Configuration
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

# Database Configuration (if needed)
DATABASE_URL=your-database-url-here
```

## 🔄 **Step 4: Restart Development Server**

```bash
npm run dev
```

## ✅ **What's Now Using Environment Variables:**

### **1. Google OAuth Client ID:**
- ✅ `src/app/layout.tsx` - GoogleOAuthProvider
- ✅ `src/app/(auth)/signin/page.tsx` - Google redirect flow

### **2. Backend URL:**
- ✅ `src/app/(auth)/signin/page.tsx` - Signin API calls
- ✅ `src/app/(auth)/signup/page.tsx` - Signup API calls
- ✅ `src/app/(auth)/signin/page.tsx` - Google OAuth API calls

## 🔒 **Security Benefits:**

- ✅ **No hardcoded secrets** in your code
- ✅ **Environment-specific configuration**
- ✅ **Safe for version control** (`.env.local` is gitignored)
- ✅ **Easy to change** between development/production

## 🌍 **Environment Variables Explained:**

### **NEXT_PUBLIC_GOOGLE_CLIENT_ID**
- **Purpose:** Your Google OAuth Client ID
- **Format:** `123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com`
- **Required:** Yes, for Google OAuth to work

### **NEXT_PUBLIC_BACKEND_URL**
- **Purpose:** URL of your backend API
- **Development:** `http://localhost:5000`
- **Production:** `https://your-backend-domain.com`
- **Required:** Yes, for API calls to work

### **DATABASE_URL** (Optional)
- **Purpose:** Database connection string
- **Format:** `postgresql://username:password@host:port/database`
- **Required:** Only if you need direct database access

## 🚀 **Production Setup:**

When deploying to production, create a `.env.production` file:

```bash
# Production Environment Variables
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-production-google-client-id
NEXT_PUBLIC_BACKEND_URL=https://your-backend-domain.com
DATABASE_URL=your-production-database-url
```

## 🧪 **Testing:**

1. **Check if environment variables are loaded:**
   ```javascript
   console.log('Google Client ID:', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
   console.log('Backend URL:', process.env.NEXT_PUBLIC_BACKEND_URL);
   ```

2. **Test Google OAuth:**
   - Click "Continue with Google"
   - Should redirect to Google with your Client ID

3. **Test API calls:**
   - Try signing up/signing in
   - Should connect to your backend

## 🚨 **Troubleshooting:**

### **"Google OAuth is not configured" Error:**
- Check that `NEXT_PUBLIC_GOOGLE_CLIENT_ID` is set in `.env.local`
- Restart your development server

### **"Cannot connect to backend" Error:**
- Check that `NEXT_PUBLIC_BACKEND_URL` is correct
- Make sure your backend server is running

### **Environment variables not loading:**
- Make sure the file is named `.env.local` (not `.env`)
- Restart your development server
- Check that variables start with `NEXT_PUBLIC_` for client-side access

## 📁 **File Structure:**

```
Training-system/
├── .env.local                    # Your environment variables
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Uses Google Client ID
│   │   └── (auth)/
│   │       ├── signin/page.tsx  # Uses both variables
│   │       └── signup/page.tsx  # Uses Backend URL
└── ...
```

## ✅ **Success Checklist:**

- [ ] Created `.env.local` file
- [ ] Added your Google OAuth Client ID
- [ ] Set correct Backend URL
- [ ] Restarted development server
- [ ] Tested Google OAuth login
- [ ] Tested regular email/password login
- [ ] Verified no hardcoded URLs in code

Your environment variables are now properly configured! 🎉 