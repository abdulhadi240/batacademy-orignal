"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import fetchData from "@/actions/server"
import { toast } from "react-toastify"

export default function CourseRequestForm({ locale }) {
  // State variables for form data
  const [categories, setCategories] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [date, setDate] = useState("");
  const [cities, setCities] = useState([]);
  const [email, setEmail] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");

  // Fetch categories and cities on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchData("/category", locale);
        setCategories(data.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    const fetchCities = async () => {
      try {
        const data = await fetchData("/city", locale);
        setCities(data.data);
      } catch (err) {
        console.error("Failed to fetch cities:", err);
      }
    };

    fetchCategories();
    fetchCities();
  }, [locale]);

  // Fetch specializations when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      const fetchSpecializations = async () => {
        try {
          const data = await fetchData(`/category/${selectedCategory}/specializations`, locale);
          setSpecializations(data.data);
        } catch (err) {
          console.error("Failed to fetch specializations:", err);
        }
      };
      fetchSpecializations();
    } else {
      setSpecializations([]);
    }
  }, [selectedCategory, locale]);

  // Fetch courses when a specialization is selected
  useEffect(() => {
    if (selectedSpecialization) {
      const fetchCourses = async () => {
        try {
          const data = await fetchData(`/specialization/${selectedSpecialization}/courses`, locale);
          setCourses(data.data);
        } catch (err) {
          console.error("Failed to fetch courses:", err);
        }
      };
      fetchCourses();
    } else {
      setCourses([]);
    }
  }, [selectedSpecialization, locale]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Get human-readable names from slugs
    const categoryName = categories.find(cat => cat.slug === selectedCategory)?.name || "Not specified"
    const specializationName = specializations.find(spec => spec.slug === selectedSpecialization)?.name || "Not specified"
    const courseName = courses.find(course => course.slug === selectedCourse)?.name || "Not specified"
    const cityName = cities.find(city => city.slug === selectedCity)?.name || "Not specified"

    // Construct the dynamic message
    const message = `The user ${email} has requested a new course in category: ${categoryName}, specialization: ${specializationName}, course: ${courseName}, city: ${cityName}, with the following special message: ${additionalMessage || "None provided"}`

    // Prepare form data
    const formData = new FormData()
    formData.append("name", "Unknown ")   // You can set a real name if needed
    formData.append("email", email)
    formData.append("phone", '123456789')  // Add phone if needed
    formData.append("message", message)

    try {
      const response = await fetch("https://batd.website12.help/api/contact-us", {
        method: "POST",
        // Note: Do NOT manually set "Content-Type" when sending FormData
        headers: {
          "Accept-Language": locale,
          "Accept":"application/json"
        },
        body: formData,
      })

      if (!response.ok) {
        // If the status is not 2xx, throw an error
        throw new Error(`Request failed with status ${response.status}`)
      }

      // Parse the response
      const data = await response.json()
      console.log("Response:", data)

      // Show a success toast
      toast.success("Successfully Submitted Application")

      // Clear the form fields if you want
      setSelectedCategory("")
      setSelectedSpecialization("")
      setSelectedCourse("")
      setSelectedCity("")
      setEmail("")
      setAdditionalMessage("")
      setDate("")
    } catch (error) {
      console.error("Error:", error)
      // Show an error toast
      toast.error("Error while Submitting Application")
    }
  }
  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Request a Course</CardTitle>
          <CardDescription className="text-white">
            Fill out the form below to request a specialized course
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Category Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.length > 0 ? (
                        categories.map((category) => (
                          <SelectItem key={category.id} value={category.slug}>
                            {category.name}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="no-options" disabled>No categories available</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* Specialization Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Select
                    onValueChange={setSelectedSpecialization}
                    value={selectedSpecialization}
                    disabled={!selectedCategory}
                  >
                    <SelectTrigger id="specialization" className="w-full">
                      <SelectValue placeholder={selectedCategory ? "Select specialization" : "Select category first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {specializations.length > 0 ? (
                        specializations.map((specialization) => (
                          <SelectItem key={specialization.id} value={specialization.slug}>
                            {specialization.name}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="no-options" disabled>No specializations available</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* Course Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select
                    onValueChange={setSelectedCourse}
                    value={selectedCourse}
                    disabled={!selectedSpecialization}
                  >
                    <SelectTrigger id="course" className="w-full">
                      <SelectValue placeholder={selectedSpecialization ? "Select course" : "Select specialization first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.length > 0 ? (
                        courses.map((course) => (
                          <SelectItem key={course.id} value={course.slug}>
                            {course.name}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="no-options" disabled>No courses available</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* City Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Select onValueChange={setSelectedCity} value={selectedCity}>
                    <SelectTrigger id="city" className="w-full">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.length > 0 ? (
                        cities.map((city) => (
                          <SelectItem key={city.id} value={city.slug}>
                            {city.name}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="no-options" disabled>No cities available</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* Language Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select>
                    <SelectTrigger id="language" className="w-full">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Arabic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Attendees Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="attendees">Number of Attendees</Label>
                  <Select>
                    <SelectTrigger id="attendees" className="w-full">
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3+">3+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select>
                    <SelectTrigger id="duration" className="w-full">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Week">Week</SelectItem>
                      <SelectItem value="2 Week">2 Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date Picker */}
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal" id="date">
                        <Calendar className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              </div>

              {/* Additional Message Textarea */}
              <div className="space-y-2">
                <Label htmlFor="specific-course">Do you have a specific Course/Program?</Label>
                <Textarea
                  id="specific-course"
                  placeholder="Please describe any specific requirements or questions you have about the course..."
                  className="min-h-[120px]"
                  value={additionalMessage}
                  onChange={(e) => setAdditionalMessage(e.target.value)}
                />
              </div>

              
            </div>
            <CardFooter className="flex justify-end gap-2 border-t p-6 bg-muted/20">
          <Button type="submit" className="text-white">Submit Request</Button>
        </CardFooter>
          </form>
        </CardContent>

      </Card>
    </div>
  )
}