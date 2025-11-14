export default function Loading(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div
          role="status"
          className="animate-spin rounded-full h-12 w-12 border-4 border-t-transparent border-primary"
          aria-label="Loading"
        />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    </div>
  )
}