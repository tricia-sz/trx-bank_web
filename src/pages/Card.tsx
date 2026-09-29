import { CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Card as SCard } from "../components/ui/card";


export default function Card({children}: any) {
  return (
    <>
      <SCard className="w-xs bg-blue-950 items-center text-blue-950 shadow-2xl shadow-accent-foreground mr-12 border-4 border-amber-300">
        <CardHeader>
          <CardTitle>{}</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
        </CardContent>
      </SCard>

    </>
  )
}