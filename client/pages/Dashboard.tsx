import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, Calendar, MapPin, Heart, History, Settings, LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const mockBookings = [
    { id: 1, destination: 'Darjeeling', date: '2024-02-15', status: 'confirmed' },
    { id: 2, destination: 'Sundarbans', date: '2024-03-10', status: 'pending' }
  ];

  const mockFavorites = [
    'Kolkata Heritage Walk',
    'Durga Puja Pandal Tours',
    'Darjeeling Tea Gardens'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.fullName}!
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your bookings, favorites, and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <CardTitle>{user?.fullName}</CardTitle>
                <CardDescription>Traveler since {formatDate(user?.joinedDate || '')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{user?.email}</span>
                </div>
                {user?.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">Joined {formatDate(user?.joinedDate || '')}</span>
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-red-600 hover:text-red-700"
                    onClick={logout}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{mockBookings.length}</div>
                  <div className="text-sm text-gray-600">Total Bookings</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{mockFavorites.length}</div>
                  <div className="text-sm text-gray-600">Favorites</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <History className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-sm text-gray-600">Completed Tours</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Your upcoming and recent travel bookings</CardDescription>
              </CardHeader>
              <CardContent>
                {mockBookings.length > 0 ? (
                  <div className="space-y-4">
                    {mockBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <MapPin className="w-5 h-5 text-gray-400" />
                          <div>
                            <div className="font-medium">{booking.destination}</div>
                            <div className="text-sm text-gray-500">{formatDate(booking.date)}</div>
                          </div>
                        </div>
                        <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'}>
                          {booking.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>No bookings yet. Start exploring West Bengal!</p>
                    <Button className="mt-4">Browse Destinations</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Favorite Destinations */}
            <Card>
              <CardHeader>
                <CardTitle>Favorite Destinations</CardTitle>
                <CardDescription>Places you've shown interest in</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockFavorites.map((favorite, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>{favorite}</span>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
