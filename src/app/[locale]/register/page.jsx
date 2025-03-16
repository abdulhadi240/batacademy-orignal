"use client";
import HeaderSection from "@/components/HeaderSection";
import Head from "next/head";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react"
import fetchData from "@/actions/server";
export const dynamic = "force-dynamic";

export default function Page({params}) {
  const {locale} = params
  const searchParams = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [slug, setSlug] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [participantType, setParticipantType] = useState("Company");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false)
  const [constantId, setConstantId] = useState(""); // Default constant value
  const [numberOfAttendees, setNumberOfAttendees] = useState(""); // Default for individual
  const [allmember , setAllMember] = useState([])
  const [allweek , SetAllWeek] = useState([])
 const [cities , setCities] = useState(null)
  console.log(numberOfAttendees , constantId)

  // Regex for valid phone number format (allowing + and digits only)
  const phoneRegex = /^[+]?[0-9]{10,15}$/; // Valid phone number
  const mobileRegex = /^[+]?[0-9]{10,15}$/; // Same for mobile number

  // Handle phone number input change
  const handlePhoneChange = (e) => {
    setPhone(e.target.value); // Allow any input
  };

  // Handle mobile number input change
  const handleMobileChange = (e) => {
    setMobile(e.target.value); // Allow any input
  };

  // Validate phone and mobile number before form submission
  const validatePhone = () => phoneRegex.test(phone);
  const validateMobile = () => mobileRegex.test(mobile);


  const [participants, setParticipants] = useState([
    {
      fullName: "",
      email: "",
      jobTitle: "",
      phone: "",
      mobile: "",
    },
  ]);

  const handleParticipantTypeChange = (type) => {
    setParticipantType(type);
  };
  const handleInputChange = (index, field, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const addParticipant = () => {
    setParticipants([
      ...participants,
      {
        fullName: "",
        email: "",
        jobTitle: "",
        phone: "",
        mobile: "",
      },
    ]);
  };

  useEffect(() => {
    setSlug(searchParams.get("course") || "");
    setSelectedDate(searchParams.get("date") || "");
    setCity(searchParams.get("city") || "");
  }, [searchParams]);

  useEffect(() => {
    setSlug(searchParams.get("course") || "");

    const getCities = async () => {
      const response = await fetchData("/city", locale);
      setCities(response);
    }
    // Fetch the course details after slug is set
    const getDetail = async () => {
      if (slug) {
        try {
          const res = await fetchData(`/course/${slug}`, locale);
          setDetail(res);

          return res;
        } catch (error) {
          console.error(error.message);
        }
      }
    };

    getDetail();
    getCities();
  }, [slug, searchParams]);

  useEffect(() => {
    const fetchCountries = async () => {
      const Countries = await fetchData("/country/list", locale);
      setCountries(Countries);
    }

    const fetchMember = async () => {
      const members = await fetchData("/constant/members",locale)
      setAllMember(members);
    }

    const fetchWeek = async () => {
      const weeks = await fetchData("/constant/weeks",locale)
      SetAllWeek(weeks);
      console.log(weeks);
      
    }

    fetchCountries();
    fetchMember()
    fetchWeek()
  }, []);

  const handleSubmit = async (e) => {
    if (!validatePhone() || !validateMobile()) {
      alert("Please enter valid phone and mobile numbers.");
      return;
    }

    e.preventDefault();
    setLoading(true)
    // Create a new FormData object
    const formData = new FormData();
    const lang_id = language === "English" ? 0 : 1;
    const is_company = participantType.toLowerCase() === "company" ? 1 : 0;
    // Append fields to FormData
    formData.append("course_id", detail?.id || "");
    formData.append("category_id", category || detail?.category_id );
    formData.append("specialization_id", specialization || detail.specialization_id);
    formData.append("city_id", city || "");
    formData.append("course_date", selectedDate || "");
    formData.append("full_name", fullname || "");
    formData.append("lang", lang_id);
    formData.append("constant_id", constantId);
    formData.append("number_of_attendees_id", numberOfAttendees);
    formData.append("email", email || "");
    formData.append("job_title", jobtitle || "");
    formData.append("phone", phone || "");
    formData.append("mobile", mobile || "");
    formData.append("company_name", company || "");
    formData.append("address", address || "");
    formData.append("country_id", country || "");
    formData.append("is_company", is_company);

    // Append participants only if it's a company
    if (participantType.toLowerCase() === "company") {
      participants.forEach((participant, index) => {
        formData.append(
          `company_full_name[${index}]`,
          participant.fullName
        );
        formData.append(`company_email[${index}]`, participant.email);
        formData.append(
          `company_job_title[${index}]`,
          participant.jobTitle
        );
        formData.append(`company_phone[${index}]`, participant.phone);
        formData.append(`company_mobile[${index}]`, participant.mobile);
      });
    }
    try {
      const response = await fetch(
        "https://batd.website12.help/api/course/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Accept-Language": `${locale}`,
          },
          body: formData,
        }
      );

      const responseData = await response.json(); // Parse JSON response
      console.log("Response Data:", responseData.status);

      // Handle success based on `status`
      if (responseData.status == true) {
        setModal(true);
        setSuccess(true);
        console.log(responseData.message); // Log success message
      } else {
        setModal(true);
        setSuccess(false);
        console.error("Unexpected status:", responseData.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Handle network or other errors
    }
  };

  return (
    <>
      <Head>
        <meta name="csrf-token" content="{{ csrf_token() }}"></meta>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <HeaderSection params={params.locale}></HeaderSection>

      <div className="min-h-screen py-10 bg-gray-100 flex items-center justify-center text-base">
        <div className="bg-white shadow-md rounded-lg md:p-6 p-4 w-full max-w-3xl">
          <h1 className="text-2xl font-semibold mb-6 text-center">Register Course</h1>

          <form onSubmit={handleSubmit}>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6">
              {/* Course Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Course Title</label>
                <input
                  type="text"
                  value={detail?.name || ""}
                  readOnly
                  className="w-full cursor-not-allowed border border-gray-300 rounded-lg p-2 bg-gray-100"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={category}
                  required
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value={detail.category_id}>{detail.category}</option>
                </select>
              </div>

              {/* Specialization */}
              <div>
                <label className="block text-sm font-medium mb-2">Specialization</label>
                <select
                  value={specialization}
                  required
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full border text-black border-gray-300 rounded-lg p-2"
                >
                  <option value={detail.specialization_id}>{detail.specialization}</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <select
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="">Select City</option>
                  {cities?.data.map((cityOption) => (
                    <option key={cityOption.id} value={cityOption.id}>
                      {cityOption.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select
                  value={language}
                  required
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="English">English</option>
                  <option value="Arabic">Arabic</option>
                </select>
              </div>


              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Attendees
                </label>
                <select
                  value={numberOfAttendees}
                  required
                  onChange={(e) => setNumberOfAttendees(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value={''}>Select Attendees</option>
                  {allmember.map((data,index)=>{
                    return(
                      <option key={index} value={data.id}>{data.name}</option>
                    )
                  })}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Duration
                </label>
                <select
                  value={constantId}
                  required
                  onChange={(e) => setConstantId(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                 <option value={''}>Select Duration</option>

                  {allweek?.map((data,index)=>{
                    return(
                      <option key={index} value={data.id}>{data.name}</option>
                    )
                  })}
                </select>
              </div>

<div className="col-span-2">
                <label className="block text-sm font-medium sm:mb-2 mt-2 sm:mt-0">
                  Available Dates
                </label>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">
                          #
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {detail?.dates?.map((dateObj) => (
                        <tr key={dateObj.id} className="hover:bg-gray-100">
                          <td className="px-4 py-2 text-sm text-gray-700 border-b">
                            <input
                              type="radio"
                              name="date"
                              value={dateObj.course_date}
                              checked={selectedDate === dateObj.course_date}
                              onChange={(e) => setSelectedDate(e.target.value)} // Update state directly
                              onClick={() => setSelectedDate(dateObj.course_date)} // Handle click directly
                              className="focus:ring-blue-500"
                            />
                          </td>
                          <td
                            className="px-4 py-2 text-sm text-gray-700 border-b cursor-pointer"
                            onClick={() => setSelectedDate(dateObj.course_date)} // Clicking on the row updates the date
                          >
                            {dateObj.course_date}
                          </td>
                        </tr>
                      ))}
                      <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 text-sm text-gray-700 border-b">
                          <input
                            type="radio"
                            name="date"
                            value={selectedDate}
                            checked={
                              !detail?.dates?.some(
                                (dateObj) => dateObj.course_date === selectedDate
                              )
                            }
                            onChange={(e) => setSelectedDate(e.target.value)}
                            onClick={() => setSelectedDate(selectedDate)} // Ensure custom date selection
                            className="focus:ring-blue-500"
                          />
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700 border-b">
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)} // Handle custom date change
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Participant Form */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-6">Participant Form</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Participant Type</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="participantType"
                      value="Company"
                      checked={participantType === "Company"}
                      onChange={() => handleParticipantTypeChange("Company")}
                    />
                    <span>Company</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="participantType"
                      value="Person"
                      checked={participantType === "Person"}
                      onChange={() => handleParticipantTypeChange("Person")}
                    />
                    <span>Person</span>
                  </label>
                </div>
              </div>

              {/* Participant/Company Details */}
              <div className="mb-6 border-t pt-4">
                <h3 className="text-lg font-medium mb-4">
                  {participantType === "Company" ? "Company Details" : "Participant"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Job Title"
                    required
                    value={jobtitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                  <select
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  >
                    <option>Select Country</option>
                    {countries.map((country , index) => (
                      <option key={index} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Company Participants */}
                {participants.map(
                  (participant, index) =>
                    participantType === "Company" && (
                      <div key={index} className="mb-6 border-t my-10 pt-4">
                        <h3 className="text-lg font-medium mb-4">Participant {index + 1}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={participant.fullName}
                            onChange={(e) =>
                              handleInputChange(index, "fullName", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg p-2"
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            value={participant.email}
                            onChange={(e) =>
                              handleInputChange(index, "email", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg p-2"
                          />
                          <input
                            type="text"
                            placeholder="Job Title"
                            value={participant.jobTitle}
                            onChange={(e) =>
                              handleInputChange(index, "jobTitle", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg p-2"
                          />
                          <input
                            type="tel"
                            placeholder="Phone"
                            value={participant.phone}
                            onChange={(e) =>
                              handleInputChange(index, "phone", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg p-2"
                          />
                          <input
                            type="tel"
                            placeholder="Mobile"
                            value={participant.mobile}
                            onChange={(e) =>
                              handleInputChange(index, "mobile", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-lg p-2"
                          />
                        </div>
                      </div>
                    )
                )}
              </div>

              {participantType === "Company" && (
                <button
                  type="button"
                  onClick={addParticipant}
                  className="text-blue-500"
                >
                  + Add Another Participant
                </button>
              )}
            </div>

            <div className="mt-8 text-start">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg"
              >
                {loading ? "Loading ..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-[100%] sm:max-w-[540px] overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8">
              {success ? (
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Registration Successful
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    Your registration has been submitted successfully. You will
                    be notified via email or phone shortly.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Registration Error
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    We apologize, but there was an error submitting your
                    registration. Please try again later or contact{" "}
                    <Link
                      href="/customer_service"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Customer Support
                    </Link>
                    .
                  </p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setModal(false)}
                  className="w-full sm:w-1/2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
                <Link
                  href={`${params.locale}/search_course?type=1`}
                  className="w-full sm:w-1/2 text-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/70 transition-colors text-sm sm:text-base"
                >
                  Discover New Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}