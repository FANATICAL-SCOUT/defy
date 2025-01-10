"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ExplorePetitions = () => {
  const [petitions, setPetitions] = useState([{ id: 1, title: 'Sample Petition', description: 'This is a sample petition', petitioner: 'John Doe' }]);

  useEffect(() => {
    // Fetch petitions from the backend
    const fetchPetitions = async () => {
      const response = await fetch('/api/petitions');
      const data = await response.json();
      setPetitions(data);
    };

    fetchPetitions();
  }, []);

  return (
    <div className="container mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">Explore Petitions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {petitions.map((petition) => (
          <Card key={petition.id} className="border border-primary focus:border-secondary transition-colors shadow-md">
            <CardContent className="flex flex-col justify-between h-full p-4">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-2">{petition.title}</h2>
                <p className="text-base text-muted-foreground mb-4">{petition.description}</p>
                <p className="text-sm text-muted-foreground">By: <span className="font-medium">{petition.petitioner}</span></p>
              </div>
              <Link href={`/petitions/${petition.id}`}>
                <Button className="mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExplorePetitions;