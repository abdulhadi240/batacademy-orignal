import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsOfUse() {
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Use</h1>
        
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Welcome to Education Academy. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. Please read these Terms of Use carefully before using our platform.
        </p>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Last Updated: January 8, 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              These Terms of Use govern your access to and use of Education Academy's website, mobile applications, and services. By using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">By accessing or using the Education Academy services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>2. User Responsibilities</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">As a user of Education Academy, you are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account information</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring that all information you provide is accurate and up-to-date</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Respecting the intellectual property rights of others</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>3. Intellectual Property</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">All content provided by Education Academy, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Education Academy or its content suppliers and is protected by international copyright laws.</p>
              <p>Users may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our platform without the prior written consent of Education Academy.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>4. Limitation of Liability</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">Education Academy and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use or inability to use the service</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the service</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the service</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>5. Modifications to Terms</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">Education Academy reserves the right to modify or replace these Terms of Use at any time. We will provide notice of any significant changes by posting the new Terms of Use on this page and updating the "Last Updated" date.</p>
              <p>Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Use.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <p>
              Education Academy<br />
              123 Learning Lane<br />
              Knowledge City, KN 12345<br />
              Email: legal@educationacademy.com<br />
              Phone: (555) 123-4567
            </p>
          </CardContent>
        </Card>
      </div>
  )
}

