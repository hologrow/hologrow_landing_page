import SignForm from "@/components/sign/form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl: string | undefined }>;
}) {
  const { callbackUrl } = await searchParams;
  const session = await auth();
  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center self-center font-medium">
          <div className="flex items-center justify-center">
            <img src="/logoWithName.png" alt="Hologrow" className="h-6 w-auto" />
          </div>
        </a>
        <SignForm />
      </div>
    </div>
  );
}
