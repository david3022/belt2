<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the single-product storefront on the index route; its editorial sections belong to one product purchase journey.
- Keep product pricing and quantity calculations in a shared browser-safe module, with concrete price tests.
- Do not fabricate reviews, purchase counts, medical guarantees or shipping policies; only show verified seller information.
- Keep checkout explicitly unavailable until a physical-goods payment integration and shipping settings are configured.
