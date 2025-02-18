import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ComingSoonProps {
  title: string
  description: string
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">{description}</p>
          <Link href="/">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

