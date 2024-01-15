---
layout: default
title: Contact
eleventyNavigation:
  key: Contact
  order: 4
---

# Contact me

You can find a variety of my social profiles in the footer, and can use any of them to contact me.

If you’d like to send encrypted email to me, you can do so using my PGP key.
You can find my PGP public key on [my Keybase profile][keybase-sharparam], or on your favourite keyserver (I upload to the major ones, and from there they should propagate further).

My key details:

<dl>
  <dt>Size and type</dt>
  <dd>4096 bits RSA</dd>
  <dt>Short ID</dt>
  <dd>7B00AD04</dd>
  <dt>Long ID</dt>
  <dd>C58C41E27B00AD04</dd>
  <dt>Fingerprint</dt>
  <dd>A6B6 5DCE 2EB7 BEAE 9600 74E6 C58C 41E2 7B00 AD04</dd>
  <dt>Created</dt>
  <dd>2020-02-13</dd>
  <dt>UIDs</dt>
  <dd>
    <ul>
      <li class="primary">Adam Hellberg (Personal) &lt;<a href="mailto:sharparam@sharparam.com">sharparam@sharparam.com</a>&gt;</li>
      <li>Adam Hellberg (Personal) &lt;<a href="mailto:adam.hellberg@sharparam.com">adam.hellberg@sharparam.com</a>&gt;</li>
      <li>Adam Hellberg (Work) &lt;<a href="mailto:adam.hellberg@ninetech.com">adam.hellberg@ninetech.com</a>&gt;</li>
    </ul>
  </dd>
</dl>

My domain also supports [WKD][] if you’d like to make use of that for discovering my keys.

## Social profiles

<ul>
{% for social in metadata.socials %}
 <li><a href="{{ social.url }}">{{ social.name }}</a></li>
{% endfor %}
</ul>

[keybase-sharparam]: https://keybase.io/sharparam
[wkd]: https://wiki.gnupg.org/WKD
