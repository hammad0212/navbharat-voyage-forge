import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompanyServices from "./CompanyServices";
//import ProfileNavigation from "@/components/ProfileNavigation";
//import CompanyServices from "@/components/CompanyServices";
import sarkehjroja from "../assets/sarkhejroja.jpg";
import tiger from "../assets/bengal-tiger.jpg"
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      {/* <ProfileNavigation /> */}

      {/* Hero Section with Taj Mahal */}
      <div
        className="relative h-[500px] bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${sarkehjroja})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Company Profile
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full bg-white">
          <TabsList className="grid w-full grid-cols-3 mb-5 bg-white">
            <TabsTrigger
              value="about"
              className="bg-white text-black border border-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-200 py-2 px-4 rounded"
            >
              About Company
            </TabsTrigger>

            <TabsTrigger
              value="why-choose"
              className="bg-white text-black border border-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-200 py-2 px-4 rounded"
            >
              Why Choose Us?
            </TabsTrigger>

            <TabsTrigger
              value="services"
              className="bg-white text-black border border-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-200 py-2 px-4 rounded"
            >
              Our Services
            </TabsTrigger>

            {/* <TabsTrigger value="authorization">Authorization</TabsTrigger>
            <TabsTrigger value="clients">Our Clients</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger> */}
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <TabsContent value="about" className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-black">
                      About Company
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Tour Group at Taj Mahal"
                        className="w-64 h-48 object-cover rounded-lg shadow-md"
                      />
                      <div className="flex-1">
                        <p className="text-black leading-relaxed">
                          Founded in Ahmedabad, Travel Merge Holidays Private
                          Limited was officially incorporated on March 29, 2025
                          (CIN: U79110GJ2025PTC160836). As a modern travel
                          company, we serve families, couples, solo travelers,
                          and groups seeking authentic experiences across Goa,
                          Kerala, Himachal Pradesh, Rajasthan, Kashmir, and more{" "}
                        </p>
                      </div>
                    </div>

                    <p className="text-black leading-relaxed">
                      TravelMerge is an Ahmedabad-headquartered travel company
                      with a strong presence in the inbound travel trade and
                      corporate travel segment. Over the years, we have expanded
                      our network with operational branches in major cities such
                      as Delhi, Mumbai, Agra, Jaipur, Kashmir, kerala, and
                      Himachal Pradesh. We are a professionally managed travel company
                      specializing in Adventure, Cultural, Religious, Hill
                      Station, and Wildlife tours across India.
                      
             <br />
                      <br />        
<ul className="list-disc list-inside text-black-800 space-y-2">
  <li><span className=" text-black">Tailor-made travel planning and itinerary design</span></li>
  <li><span className=" text-black">Hotel bookings and ticket reservations</span></li>
  <li><span className=" text-black">Comfortable and reliable transportation arrangements</span></li>
  <li><span className=" text-black">Budget-friendly and luxury holiday packages customized to your needs</span></li>
</ul>

                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="why-choose" className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-black">
                      Why Us?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black leading-relaxed">
                     Travel Merge Holidays is a trusted and award-winning travel company headquartered in Ahmedabad, India. With a strong reputation built over years of delivering exceptional travel experiences, we specialize in curating personalized tour packages across India and beyond.

Backed by a team of experienced travel professionals, we are committed to offering high-quality services, from seamless bookings to on-ground assistance. Our dedication to customer satisfaction is reflected in the glowing feedback we’ve received from countless happy travelers.

Whether you’re planning a wildlife adventure, a relaxing beach holiday, or a cultural escape, Travel Merge Holidays ensures every journey is comfortable, safe, and unforgettable.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-black">
                      Our Motto:
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Customer satisfaction:
                      </h4>
                      <p className="text-black">
                        It's the prime motto of our business, which has helped
                        us to build a good network with travellers from the
                        farthest corners of the world. The company today holds
                        more than 100,000 satisfied travellers and is still
                        framing the travel diaries of fresh clients.
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Trekking Tour"
                        className="w-48 h-32 object-cover rounded-lg shadow-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">
                          Quality services:
                        </h4>
                        <p className="text-black">
                          Customer satisfaction can only be achieved by quality
                          and time to time services. Knock us at any hour and
                          from anywhere in the world, we are available. The
                          company tries to give the ultimate satisfaction and
                          luxury depending upon the traveller's need.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <CompanyServices />
              </TabsContent>

              {/* <TabsContent value="authorization" className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Authorization & Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <Badge variant="secondary" className="p-3 justify-center">Tourism Ministry Approved</Badge>
                      <Badge variant="secondary" className="p-3 justify-center">IATA Certified</Badge>
                      <Badge variant="secondary" className="p-3 justify-center">ISO 9001:2015</Badge>
                      <Badge variant="secondary" className="p-3 justify-center">ASTA Member</Badge>
                      <Badge variant="secondary" className="p-3 justify-center">TAAI Member</Badge>
                      <Badge variant="secondary" className="p-3 justify-center">ADTOI Member</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent> */}

              {/* <TabsContent value="clients" className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Our Satisfied Clients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((client) => (
                        <div key={client} className="h-16 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-muted-foreground">Client {client}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent> */}

              {/* <TabsContent value="testimonials" className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">What Our Clients Say</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        name: "John Smith",
                        country: "USA",
                        review: "Exceptional service and unforgettable experience. The attention to detail was remarkable!"
                      },
                      {
                        name: "Emma Wilson",
                        country: "UK",
                        review: "Professional team with deep knowledge of Indian culture. Highly recommended!"
                      },
                      {
                        name: "Hans Mueller",
                        country: "Germany",
                        review: "Perfect organization from start to finish. Will definitely book again!"
                      }
                    ].map((testimonial, index) => (
                      <div key={index} className="p-4 bg-muted rounded-lg">
                        <p className="text-muted-foreground italic mb-2">"{testimonial.review}"</p>
                        <div className="text-sm">
                          <span className="font-semibold">{testimonial.name}</span>
                          <span className="text-muted-foreground"> - {testimonial.country}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent> */}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-black">
                    Trekking Tours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Trekking in India"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Button className="w-full bg-white text-black border border-black hover:bg-blue-500 hover:text-white hover:border-blue-500">Explore Trekking Tours</Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-black">
                    Wildlife Packages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={tiger}
                    alt="Wildlife Safari"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
              <Button
  className="w-full bg-white text-black border border-black hover:bg-blue-500 hover:text-white hover:border-blue-500"
>
  Explore Wildlife
</Button>


                </CardContent>
              </Card>

              <Card className="shadow-card bg-white text-black border border-gray-200"></Card>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
