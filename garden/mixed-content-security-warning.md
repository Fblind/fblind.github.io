---
title: Mixed content security warning
url: "mixed-content-security-warning"
---

Sometimes browsers shows us a warning telling us that our site is not completely secure, even if we have ssl enabled.

And why is that ?, because we have mixed content, and what does it means ?, this means that we have some content that is serve via http and our site is using https.

Therefore the easy fix is **use always https**. And how we find which content is mixed ?, check your devtools console. And also sanitaze every content that is serve via an url following the same pattern (serve as https).
