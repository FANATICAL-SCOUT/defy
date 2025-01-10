'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'
import { FileTextIcon, SendIcon } from 'lucide-react'

const PETITION_TYPES = [
  'Government Petition',
  'Community Petition',
  'Workplace Petition',
  'Academic Petition',
]

export function CreatePetitionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    petitionText: '',
    petitionType: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate blockchain transaction
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({
        title: 'Success!',
        description: 'Your petition has been created successfully.',
      })
      // Reset form
      setFormData({
        name: '',
        address: '',
        petitionText: '',
        petitionType: '',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create petition. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto gradient-border shadow-lg p-6">
      <CardHeader className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-75 blur-sm" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-background">
              <FileTextIcon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div>
            <CardTitle className="text-3xl font-semibold">Create New Petition</CardTitle>
            <CardDescription className="text-lg">Submit your petition to the blockchain</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Petitioner's Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Petitioner's Name</label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your full name"
              className="border border-primary focus:border-secondary transition-colors shadow-md"
            />
          </div>

          {/* Wallet Address */}
          <div className="space-y-2">
            <label htmlFor="wallet-address" className="text-sm font-medium">Wallet Address</label>
            <Input
              id="wallet-address"
              disabled
              value="0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
              placeholder="Connect wallet to auto-populate"
              className="border border-gray-400 bg-muted/50 shadow-md"
            />
          </div>

          {/* Physical Address */}
          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-medium">Physical Address</label>
            <Input
              id="address"
              required
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="Enter your physical address"
              className="border border-primary focus:border-secondary transition-colors shadow-md"
            />
          </div>

          {/* Petition Type */}
          <div className="space-y-2">
            <label htmlFor="petition-type" className="text-sm font-medium">Petition Type</label>
            <Select
              value={formData.petitionType}
              onValueChange={(value) =>
                setFormData({ ...formData, petitionType: value })
              }
            >
              <SelectTrigger id="petition-type" className="border border-primary focus:border-secondary transition-colors shadow-md">
                <SelectValue placeholder="Select petition type" />
              </SelectTrigger>
              <SelectContent>
                {PETITION_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Petition Text */}
          <div className="space-y-2">
            <label htmlFor="petition-text" className="text-sm font-medium">Petition Text</label>
            <Textarea
              id="petition-text"
              required
              value={formData.petitionText}
              onChange={(e) =>
                setFormData({ ...formData, petitionText: e.target.value })
              }
              placeholder="Enter your petition details"
              className="min-h-[200px] border border-primary focus:border-secondary transition-colors shadow-md"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className={`w-full bg-gradient-to-r from-primary to-secondary hover:bg-opacity-90 transition-opacity ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                Creating Petition...
                {/* Optionally add a spinner here */}
              </>
            ) : (
              <>
                <SendIcon className="mr-2 h-4 w-4" />
                File Petition
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
