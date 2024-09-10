import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { MultisessionAppSupport } from "@clerk/nextjs/internal";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <MultisessionAppSupport>
        <html lang="en">
          <body>
            <header>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            <main>{children}</main>
          </body>
        </html>
      </MultisessionAppSupport>
    </ClerkProvider>
  );
}
