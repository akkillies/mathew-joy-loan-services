import {
  ChevronRight,
  Home,
  Building2,
  GraduationCap,
  Car,
  CreditCard,
  BadgeCheck,
  Clock,
  Percent,
  Shield,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LeadForm from "@/components/lead-form"
import LoanTypeCard from "@/components/loan-type-card"
import TestimonialCard from "@/components/testimonial-card"
import ProcessStep from "@/components/process-step"
import LeadModal from "@/components/lead-modal"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Your Trusted Partner for All Loan Solutions
                </h1>
                <p className="max-w-[600px] text-lg text-emerald-100 md:text-xl">
                  Mathew Joy Services offers hassle-free loan solutions tailored to your unique financial needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <LeadModal buttonClassName="bg-white text-emerald-800 hover:bg-emerald-50">
                  Apply Now
                </LeadModal>
                <Link
                  href="#services"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-950"
                >
                  Explore Services <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Financial services illustration"
                width={400}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Loan Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a wide range of loan solutions to meet your financial needs
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <LoanTypeCard
              icon={<Home className="h-10 w-10 text-emerald-600" />}
              title="Home Loan"
              description="Realize your dream of owning a home with our competitive interest rates and flexible repayment options."
            >
              <LeadModal buttonVariant="link" buttonClassName="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800 p-0">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </LeadModal>
            </LoanTypeCard>
            <LoanTypeCard
              icon={<Building2 className="h-10 w-10 text-emerald-600" />}
              title="Property Loan"
              description="Get financing for your property investments with customized loan solutions tailored to your needs."
            >
              <LeadModal buttonVariant="link" buttonClassName="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800 p-0">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </LeadModal>
            </LoanTypeCard>
            <LoanTypeCard
              icon={<Building2 className="h-10 w-10 text-emerald-600" />}
              title="Business Loan"
              description="Fuel your business growth with our quick and hassle-free business loan options."
            >
              <LeadModal buttonVariant="link" buttonClassName="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800 p-0">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </LeadModal>
            </LoanTypeCard>
            <LoanTypeCard
              icon={<GraduationCap className="h-10 w-10 text-emerald-600" />}
              title="Education Loan"
              description="Invest in your future with our education loans that cover tuition fees, living expenses, and more."
            >
              <LeadModal buttonVariant="link" buttonClassName="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800 p-0">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </LeadModal>
            </LoanTypeCard>
            <LoanTypeCard
              icon={<Car className="h-10 w-10 text-emerald-600" />}
              title="Vehicle Loan"
              description="Drive your dream vehicle home with our affordable and quick vehicle loan options."
            >
              <LeadModal buttonVariant="link" buttonClassName="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800 p-0">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </LeadModal>
            </LoanTypeCard>
            <LoanTypeCard
              icon={<CreditCard className="h-10 w-10 text-emerald-600" />}
              title="Personal Loan"
              description="Meet your personal financial needs with our flexible personal loan solutions."
            >
              <LeadModal buttonVariant="link" buttonClassName="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800 p-0">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </LeadModal>
            </LoanTypeCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="About Mathew Joy Services"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Mathew Joy Services</h2>
              <p className="text-lg text-gray-600">
                With years of experience in the financial industry, Mathew Joy Services has established itself as a
                trusted partner for all your loan requirements. We understand that each client has unique financial
                needs, which is why we offer personalized loan solutions.
              </p>
              <p className="text-lg text-gray-600">
                Our team of financial experts works diligently to ensure you get the best loan options with competitive
                interest rates and flexible repayment terms. We pride ourselves on our transparent processes and
                commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer several advantages that make us the preferred choice for loan services
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <BadgeCheck className="h-12 w-12 text-emerald-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Expert Guidance</h3>
              <p className="mt-2 text-gray-600">
                Our team of financial experts provides personalized guidance throughout the loan process.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-emerald-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Quick Approval</h3>
              <p className="mt-2 text-gray-600">
                Experience fast loan approvals with minimal documentation and hassle-free processing.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Percent className="h-12 w-12 text-emerald-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Competitive Rates</h3>
              <p className="mt-2 text-gray-600">
                We offer some of the most competitive interest rates in the market for all loan types.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-emerald-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Transparent Process</h3>
              <p className="mt-2 text-gray-600">
                Our loan process is completely transparent with no hidden charges or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Simple Process</h2>
            <p className="mt-4 text-lg text-gray-600">Getting a loan with us is quick and straightforward</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <ProcessStep
              number="1"
              title="Apply Online"
              description="Fill out our simple online application form with your details."
            />
            <ProcessStep
              number="2"
              title="Document Submission"
              description="Submit the required documents for verification."
            />
            <ProcessStep
              number="3"
              title="Loan Approval"
              description="Our team reviews your application and approves your loan."
            />
            <ProcessStep
              number="4"
              title="Disbursement"
              description="Receive the loan amount directly in your bank account."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Rajesh Kumar"
              role="Business Owner"
              testimonial="Mathew Joy Services made the business loan process incredibly smooth. Their expert team guided me through every step, and I received the funds much faster than expected."
            />
            <TestimonialCard
              name="Priya Sharma"
              role="Homeowner"
              testimonial="I was struggling to find the right home loan until I approached Mathew Joy Services. They offered me a great interest rate and flexible repayment options that perfectly suited my needs."
            />
            <TestimonialCard
              name="Anand Patel"
              role="Parent"
              testimonial="Getting an education loan for my daughter's overseas studies was a breeze with Mathew Joy Services. Their transparent process and quick approval helped us plan her education without financial stress."
            />
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact" className="bg-emerald-800 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
              <p className="text-lg text-emerald-100">
                Fill out the form, and our team will get in touch with you to discuss the best loan options for your
                needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-emerald-300" />
                  <span>Served 10,000+ happy clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BadgeCheck className="h-6 w-6 text-emerald-300" />
                  <span>Authorized loan service provider</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-emerald-300" />
                  <span>100% secure and confidential</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Mathew Joy Services</h3>
              <p className="mb-4">Your trusted partner for all loan solutions.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-emerald-400">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:text-emerald-400">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:text-emerald-400">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Loan Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Home Loan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Property Loan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Business Loan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Education Loan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Vehicle Loan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Personal Loan
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
              <address className="not-italic">
                <p className="mb-2">123 Finance Street, Mumbai, India</p>
                <p className="mb-2">Email: info@mathewjoyservices.com</p>
                <p className="mb-2">Phone: +91 98765 43210</p>
                <p>Working Hours: Mon-Sat, 9AM-6PM</p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Mathew Joy Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <LeadModal
          buttonClassName="rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 h-14 w-14 flex items-center justify-center"
        >
          <ChevronRight className="h-6 w-6" />
        </LeadModal>
      </div>
    </div>
  )
}
