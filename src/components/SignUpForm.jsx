"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";

export function SignUpForm({ locale, country }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const isArabic = locale === "ar";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push(`/${locale}/`);
    }
  }, [locale]);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    // Validate password match
    const password = formData.get("password");
    const passwordConfirmation = formData.get("password_confirmation");

    if (password !== passwordConfirmation) {
      setError(isArabic ? "كلمات المرور غير متطابقة" : "Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      // Create form data for x-www-form-urlencoded format
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("full_name", formData.get("full_name"));
      urlEncodedData.append("email", formData.get("email"));
      urlEncodedData.append("job_title", formData.get("job_title"));
      urlEncodedData.append("phone", formData.get("phone"));
      urlEncodedData.append("mobile", formData.get("mobile"));
      urlEncodedData.append("company_name", formData.get("company_name"));
      urlEncodedData.append("address", formData.get("address"));
      urlEncodedData.append("country_id", formData.get("country_id"));
      urlEncodedData.append("password", password);
      urlEncodedData.append("password_confirmation", passwordConfirmation);
      urlEncodedData.append("is_company", formData.get("is_company") ? "1" : "0");

      // Send the registration request
      const response = await fetch("https://batd.website12.help/api/member/register", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: urlEncodedData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || (isArabic ? "فشل التسجيل" : "Registration failed"));
      }

      // After successful registration, store the token if available
      if (data.data && data.data.token) {
        localStorage.setItem("token", data.data.token);
      }

      // Redirect to login page or dashboard
      router.push(`/${locale}/sign-in?registered=true`);
    } catch (error) {
      console.error("Registration error:", error);
      setError(
        error.message || (isArabic ? "حدث خطأ ما. يرجى المحاولة مرة أخرى." : "Something went wrong. Please try again.")
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            {isArabic ? "إنشاء حساب" : "Create an Account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="full_name">
                  {isArabic ? "الاسم الكامل" : "Full Name"}
                </Label>
                <Input
                  id="full_name"
                  name="full_name"
                  placeholder={isArabic ? "أدخل اسمك الكامل" : "John Doe"}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
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
                <Label htmlFor="job_title">
                  {isArabic ? "المسمى الوظيفي" : "Job Title"}
                </Label>
                <Input
                  id="job_title"
                  name="job_title"
                  placeholder={isArabic ? "مثال: مطور برامج" : "Software Developer"}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company_name">
                  {isArabic ? "اسم الشركة" : "Company Name"}
                </Label>
                <Input
                  id="company_name"
                  name="company_name"
                  placeholder={isArabic ? "مثال: شركة أكمي" : "Acme Inc."}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{isArabic ? "الهاتف" : "Phone"}</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="123456789"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">{isArabic ? "الجوال" : "Mobile"}</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  placeholder="987654321"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">{isArabic ? "العنوان" : "Address"}</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder={isArabic ? "123 شارع الرئيسي" : "123 Main St"}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country_id">{isArabic ? "البلد" : "Country"}</Label>
                <select
                  id="country_id"
                  name="country_id"
                  disabled={isLoading}
                  required
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">{isArabic ? "اختر البلد" : "Select a country"}</option>
                  {country.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{isArabic ? "كلمة المرور" : "Password"}</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password_confirmation">
                  {isArabic ? "تأكيد كلمة المرور" : "Confirm Password"}
                </Label>
                <Input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="is_company"
                name="is_company"
                value="1"
                className="text-white"
              />
              <Label htmlFor="is_company" className="text-sm font-normal">
                {isArabic ? "التسجيل كشركة" : "Register as a company"}
              </Label>
            </div>

            <Button type="submit" className="w-full text-white" disabled={isLoading}>
              {isLoading
                ? isArabic
                  ? "جار إنشاء الحساب..."
                  : "Creating account..."
                : isArabic
                ? "إنشاء حساب"
                : "Create account"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
