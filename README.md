# User impersonation issue

## Summary

Signing out of an impersonated user session also appears to sign out the primary user, until the page is refreshed.

## What I did

1. Sign in
2. Navigate to localhost:3000/dashboard
3. Click impersonate next to user@example.com
4. Click sign out on the impersonate popover (with the red eye icon)

## What happened

I was redirected to the home page with a sign in link. Refreshing the page signs me in.

## What I expected to happen

I expected to be redirected to the home page signed into my existing session (as myself)
