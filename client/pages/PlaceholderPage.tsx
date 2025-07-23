import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowRight, MessageCircle, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  icon = <Construction className="h-12 w-12" /> 
}: PlaceholderPageProps) {
  return (
    <>
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Card className="border-2 border-dashed border-gray-300">
            <CardHeader className="pb-6">
              <div className="mx-auto text-gray-400 mb-4">
                {icon}
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                {title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-500">
                This page is currently under development. Our team is working hard to bring you amazing content and features.
              </p>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What would you like to see here?
                </h3>
                <p className="text-gray-600 mb-6">
                  Help us build this page by sharing your suggestions and requirements.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link to="/contact">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Share Your Ideas
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Back to Home
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
