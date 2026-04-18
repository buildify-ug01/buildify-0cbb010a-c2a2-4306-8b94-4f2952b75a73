
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Feather, Mic, Video, Music, TrendingUp, Download, Share2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              Join 10,000+ Poets Worldwide
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Where Words Come Alive
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create, share, and discover poetry through text, audio, video, and music. 
              Connect with a global community of word artists.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-poetry text-primary-foreground" asChild>
                <Link to="/create">
                  <Feather className="mr-2 h-5 w-5" />
                  Start Creating
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/discover">Explore Poems</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Express Yourself in Every Medium
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="gradient-card border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Feather className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Write Poetry</h3>
                  <p className="text-sm text-muted-foreground">
                    Craft beautiful verses with our intuitive editor and coined word dictionary.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Mic className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Audio Prints</h3>
                  <p className="text-sm text-muted-foreground">
                    Record your voice and bring your poems to life with audio performances.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Video Poetry</h3>
                  <p className="text-sm text-muted-foreground">
                    Share visual interpretations and spoken word performances.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Music className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Music Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Add background music and create immersive poetic experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Poems Preview */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Trending Today</h2>
              <Button variant="ghost" asChild>
                <Link to="/discover">View All</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="gradient-card border-border/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                        <div>
                          <p className="font-semibold text-sm">Poet Name</p>
                          <p className="text-xs text-muted-foreground">@username</p>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        <Mic className="h-3 w-3 mr-1" />
                        Audio
                      </Badge>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold mb-2">Whispers of Dawn</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 italic">
                      "In the quiet hours before light breaks,
                      When shadows dance and the world awakes..."
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-accent transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>234</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span>45</span>
                        </button>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Ready to Share Your Voice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community and start creating poetry that resonates across platforms.
            </p>
            <Button size="lg" className="gradient-poetry text-primary-foreground" asChild>
              <Link to="/create">
                <Feather className="mr-2 h-5 w-5" />
                Create Your First Poem
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;