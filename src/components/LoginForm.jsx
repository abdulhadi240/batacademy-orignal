"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "react-toastify";
import { useAuth } from "./context/AuthContext";

export function LoginForm({ locale }) {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push(`/${locale}/`);
    }
  }, [locale, router]);
  
  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
  
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
  
    try {
      const data = await login(email, password);
    } catch (err) {
      toast.error(
          (locale === "ar"
            ? "البريد الإلكتروني أو كلمة المرور غير صحيحة"
            : "Invalid email or password")
      );
    } finally {
      setIsLoading(false);
    }
  }
  

  // Translations for Arabic (ar) and default (en)
  const isArabic = locale === "ar";
  const title = isArabic ? "تسجيل الدخول" : "Sign In";
  const emailLabel = isArabic ? "البريد الإلكتروني" : "Email";
  const passwordLabel = isArabic ? "كلمة المرور" : "Password";
  const forgotPasswordText = isArabic ? "هل نسيت كلمة المرور؟" : "Forgot password?";
  const signInText = isArabic ? "تسجيل الدخول" : "Sign in";
  const signingInText = isArabic ? "جار تسجيل الدخول..." : "Signing in...";

  return (
    <Card className="w-full max-w-md mx-auto" dir={isArabic ? "rtl" : "ltr"}>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">{emailLabel}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">{passwordLabel}</Label>
              <Button variant="link" className="px-0 font-normal" size="sm">
                {forgotPasswordText}
              </Button>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              required
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full text-white" disabled={isLoading}>
            {isLoading ? signingInText : signInText}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
