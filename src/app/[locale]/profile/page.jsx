"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, Edit, GraduationCap, Mail, Phone, User } from "lucide-react"
import HeaderSection from "@/components/HeaderSection"
import { toast } from "react-toastify"
import Link from "next/link"

export default function ProfilePage({ params }) {
    const { locale } = params
    const [isEditing, setIsEditing] = useState(false)
    const [user, setUser] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [userCourse, setUserCourse] = useState(null)
    const isArabic = locale === "ar"

    // Form data state
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        job_title: "",
        phone: "",
        address: ""
    })

    // Fetch member profile from API
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            // Optionally, redirect to sign-in page if no token exists
            return
        }
        const fetchProfile = async () => {
            try {
                const response = await fetch("https://batd.website12.help/api/member/profile", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Accept": "application/json",
                    },
                })
                const data = await response.json()
                if (data.status) {
                    setUser(data.data)
                    // Initialize form data with user data
                    setFormData({
                        full_name: data.data.full_name,
                        email: data.data.email,
                        job_title: data.data.job_title || "",
                        phone: data.data.phone || data.data.mobile || "",
                        address: data.data.address || ""
                    })

                    const response1 = await fetch("https://batd.website12.help/api/member/course/request", {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Accept": "application/json",
                        },
                    })
                    const data1 = await response1.json()

                    if (data1.status) {
                        setUserCourse(data1.data)
                    }


                } else {
                    console.error("Failed to fetch profile:", data.massege)
                }
            } catch (error) {
                console.error("Error fetching profile:", error)
            }
        }
        fetchProfile()
    }, [locale])

    // Handle form input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target

        // Map the form fields to the API field names
        const fieldMapping = {
            name: "full_name",
            email: "email",
            education: "job_title",
            phone: "phone",
            bio: "address"
        }

        setFormData({
            ...formData,
            [fieldMapping[id] || id]: value
        })
    }

    // Handle form submission
    const handleSubmit = async () => {
        setIsSubmitting(true)

        const token = localStorage.getItem("token")
        if (!token) {
            toast({
                title: isArabic ? "خطأ" : "Error",
                description: isArabic ? "الرجاء تسجيل الدخول أولا" : "Please login first",
                variant: "destructive"
            })
            setIsSubmitting(false)
            return
        }

        try {
            // Create FormData object for the API request
            const formDataObject = new FormData()
            formDataObject.append("full_name", formData.full_name)
            formDataObject.append("email", formData.email)
            formDataObject.append("job_title", formData.job_title)
            formDataObject.append("phone", formData.phone)
            formDataObject.append("address", formData.address)
            formDataObject.append("company_name", user.company_name)
            formDataObject.append("country_id", user.country_id)
            formDataObject.append("mobile", user.mobile)

            const response = await fetch("https://batd.website12.help/api/member/profile/update", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json"
                },
                body: formDataObject
            })

            const result = await response.json()
            window.location.reload()
            if (result.status) {
                // Show success toast
                toast({
                    title: isArabic ? "تم بنجاح" : "Success",
                    description: isArabic ? "تم تحديث الملف الشخصي بنجاح" : "Profile updated successfully",
                })

                // Update user state with new data
                setUser({
                    ...user,
                    full_name: formData.full_name,
                    email: formData.email,
                    job_title: formData.job_title,
                    phone: formData.phone,
                    address: formData.address
                })


            } else {
                // Show error toast
                toast({
                    title: isArabic ? "خطأ" : "Error",
                    description: result.message || (isArabic ? "حدث خطأ أثناء تحديث الملف الشخصي" : "An error occurred while updating profile"),
                    variant: "destructive"
                })
            }
        } catch (error) {
            console.error("Error updating profile:", error)
            toast({
                title: isArabic ? "خطأ" : "Error",
                description: isArabic ? "حدث خطأ أثناء تحديث الملف الشخصي" : "An error occurred while updating profile",
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    // While fetching, show a loading message
    if (!user) {
        return (
            <><HeaderSection params={locale} /><div dir={isArabic ? "rtl" : "ltr"} className="container mx-auto py-10 px-4 max-w-5xl">
                <div className="animate-pulse space-y-6">
                    <div className="h-8 w-1/3 bg-gray-300 rounded mb-4"></div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <div className="h-32 w-32 bg-gray-300 rounded-full"></div>
                            <div className="h-6 w-24 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="h-10 bg-gray-300 rounded"></div>
                                <div className="h-10 bg-gray-300 rounded"></div>
                                <div className="h-10 bg-gray-300 rounded"></div>
                                <div className="h-10 bg-gray-300 rounded"></div>
                            </div>
                            <div className="h-20 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div></>
        )
    }

    // Map the API fields to our UI fields (adjust as needed)
    const profileData = {
        name: user.full_name,
        email: user.email,
        phone: user.phone || user.mobile,
        education: user.job_title, // using job_title as education
        bio: user.address, // using address as bio
        avatar: user.image || "/placeholder.svg?height=100&width=100",
    }

    // Dummy courses data remain unchanged
    const courses = [
        {
            id: 1,
            title: "Introduction to Web Development",
            instructor: "Dr. Sarah Miller",
            progress: 75,
            startDate: "Jan 15, 2025",
            endDate: "Apr 30, 2025",
            status: "in-progress",
        },
        {
            id: 2,
            title: "Data Science Fundamentals",
            instructor: "Prof. Michael Chen",
            progress: 45,
            startDate: "Feb 1, 2025",
            endDate: "May 15, 2025",
            status: "in-progress",
        },
        {
            id: 3,
            title: "UX/UI Design Principles",
            instructor: "Lisa Rodriguez",
            progress: 100,
            startDate: "Nov 10, 2024",
            endDate: "Jan 20, 2025",
            status: "completed",
        },
    ]

    return (
        <><HeaderSection params={params.locale} /><div dir={isArabic ? "rtl" : "ltr"} className="container mx-auto py-10 px-4 max-w-5xl">
            <h1 className="text-3xl font-bold mb-6">
                {isArabic ? "ملفي الشخصي" : "My Profile"}
            </h1>

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="general">
                        {isArabic ? "المعلومات العامة" : "General Information"}
                    </TabsTrigger>
                    <TabsTrigger value="courses">
                        {isArabic ? "الدورات المسجلة" : "Registered Courses"}
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>
                                    {isArabic ? "المعلومات الشخصية" : "Personal Information"}
                                </CardTitle>
                                <CardDescription>
                                    {isArabic
                                        ? "قم بإدارة بياناتك الشخصية وتفضيلاتك"
                                        : "Manage your personal details and preferences"}
                                </CardDescription>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setIsEditing(!isEditing)}
                                disabled={isSubmitting}
                            >
                                <Edit className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex flex-col items-center gap-4">
                                    <Avatar className="h-32 w-32">
                                        <AvatarImage src={profileData.avatar} alt={profileData.name} />
                                        <AvatarFallback>
                                            {profileData.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    {isEditing && (
                                        <Button variant="outline" size="sm">
                                            {isArabic ? "تغيير الصورة" : "Change Photo"}
                                        </Button>
                                    )}
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                {isArabic ? "الاسم الكامل" : "Full Name"}
                                            </Label>
                                            {isEditing ? (
                                                <Input
                                                    id="name"
                                                    defaultValue={profileData.name}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2 p-2 border rounded-md">
                                                    <User className="h-4 w-4 text-muted-foreground" />
                                                    <span>{profileData.name}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                {isArabic ? "البريد الإلكتروني" : "Email"}
                                            </Label>
                                            {isEditing ? (
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    defaultValue={profileData.email}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2 p-2 border rounded-md">
                                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                                    <span>{profileData.email}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">
                                                {isArabic ? "الهاتف" : "Phone"}
                                            </Label>
                                            {isEditing ? (
                                                <Input
                                                    id="phone"
                                                    defaultValue={profileData.phone}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2 p-2 border rounded-md">
                                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                                    <span>{profileData.phone}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="education">
                                                {isArabic ? "التعليم" : "Education"}
                                            </Label>
                                            {isEditing ? (
                                                <Input
                                                    id="education"
                                                    defaultValue={profileData.education}
                                                    onChange={handleInputChange}
                                                />
                                            ) : (
                                                <div className="flex items-center gap-2 p-2 border rounded-md">
                                                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                                    <span>{profileData.education}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="bio">
                                            {isArabic ? "العنوان" : "Address"}
                                        </Label>
                                        {isEditing ? (
                                            <Textarea
                                                id="bio"
                                                defaultValue={profileData.bio}
                                                rows={4}
                                                onChange={handleInputChange}
                                            />
                                        ) : (
                                            <div className="p-2 border rounded-md">{profileData.bio}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            {isEditing && (
                                <>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsEditing(false)}
                                        disabled={isSubmitting}
                                    >
                                        {isArabic ? "إلغاء" : "Cancel"}
                                    </Button>
                                    <Button
                                        onClick={handleSubmit}
                                        className="text-white"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ?
                                            (isArabic ? "جاري الحفظ..." : "Saving...") :
                                            (isArabic ? "حفظ التغييرات" : "Save Changes")
                                        }
                                    </Button>
                                </>
                            )}
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="courses">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">
                                {isArabic ? "دوراتي" : "My Courses"}
                            </h2>
                            
                        </div>

                        {userCourse !== null ? (
                            userCourse?.map((course) => (
                                <Card key={course.id} className="overflow-hidden">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle>{course.course}</CardTitle>
                                                <CardDescription>
                                                    {isArabic ? "فئة: " : "Category: "} {course.category}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                <span>{course.course_date}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="bg-muted/50 flex justify-between">
                                        <Button variant="secondary" size="sm" asChild>
                                            <Link href={`${params.locale}/course_details/${course.id}/${course.slug}`}>
                                                {isArabic ? "عرض الدورة" : "View Course"}
                                            </Link>
                                        </Button>

                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={`${params.locale}/register`}>
                                                {isArabic ? "تسجيل دورة جديدة" : "Register New Course"}
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))
                        ) : (
                            <div className="text-center p-6">
                                <p className="text-muted-foreground text-lg">
                                    {isArabic ? "لم يتم تسجيل أي دورة بعد" : "No course registered yet"}
                                </p>
                                <Button variant="primary" size="lg" className="mt-4" asChild>
                                    <Link href={`${params.locale}/show_cities`}>
                                        {isArabic ? "سجل الآن" : "Register Now"}
                                    </Link>
                                </Button>
                            </div>
                        )}

                    </div>
                </TabsContent>
            </Tabs>
        </div></>
    )
}
