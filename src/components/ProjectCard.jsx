import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/**
 * A project summary built from three shadcn/ui primitives:
 * Card (shell) + Badge (status) + Button ("View project").
 *
 * Every value is a prop, so each instance carries its own data and the
 * component holds no state of its own — data flows one way, parent -> child.
 */
function ProjectCard({ title, description, status, href }) {
  const isLive = status === 'Live'

  return (
    <Card className="transition-shadow duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-gray-900">
          {title}
        </CardTitle>
        <CardAction>
          <Badge
            className={
              isLive
                ? 'bg-indigo-100 text-indigo-800'
                : 'bg-gray-100 text-gray-700'
            }
          >
            {status}
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-700">{description}</p>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          className="bg-indigo-600 text-white transition-colors duration-200 hover:bg-indigo-700"
        >
          <a href={href} target="_blank" rel="noreferrer">
            View project
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
