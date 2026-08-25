import { redirect } from "next/navigation";
import { ventures } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ventures.map((v) => ({ slug: v.slug }));
}

export default async function WorkRedirect({ params }: Props) {
  await params;
  redirect("/ventures");
}
