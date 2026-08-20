import { Skeleton } from "@/components/ui/skeleton";

export function SidebarSkeleton() {
  return (
    <aside className="sticky top-0 flex h-svh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar p-5">
      <Skeleton className="h-8 w-32" />
      <div className="mt-8 space-y-2">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>
    </aside>
  );
}
