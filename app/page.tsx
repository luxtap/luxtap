"use client";

import { useState } from "react";

const themes = {
  Midnight: {
    description:
      "Dark, elegant and premium. Perfect for professional, luxury and modern brands.",
    background: "#080b18",
    cardBackground: "#151a2d",
    accent: "#ffffff",
    textColor: "#ffffff",
  },

  Clear: {
    description:
      "Clean, simple and professional. Perfect for personal profiles and businesses.",
    background: "#f7f8fa",
    cardBackground: "#ffffff",
    accent: "#111827",
    textColor: "#111827",
  },

  Ocean: {
    description:
      "Fresh, modern and vibrant. Perfect for creative, lifestyle and modern brands.",
    background: "#061827",
    cardBackground: "#0d2940",
    accent: "#38bdf8",
    textColor: "#f0f9ff",
  },
};

export default function Home() {
  /* =========================
     BASIC PROFILE
  ========================= */

  const [brandName, setBrandName] = useState("Luxtap");

  const [fullName, setFullName] =
    useState("Iyosh Carreal De Castro");

  const [headline, setHeadline] = useState(
    "Your identity. One tap away."
  );

  const [description, setDescription] =
    useState(
      "Connect with Iyosh Carreal De Castro through his businesses, locations, social media and contact information."
    );

  /* =========================
     CONTACT
  ========================= */

  const [phone, setPhone] =
    useState("09915729499");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("Padre Garcia, Batangas");

  /* =========================
     GOOGLE MAPS LOCATIONS
  ========================= */

  const [mapLocations, setMapLocations] = useState([
    {
      name: "Hanz's Food Hub",
      url: "https://www.google.com/maps?q=Hanz%27s+food+hub,+Ilaya,+Quilo-quilo+North,+Padre+Garcia,+4224+Batangas&ftid=0x33bd151bb6255e35:0x62076026b93f00df&entry=gps",
    },
    {
      name: "Pro-tech Carwash (Autofixxed and Car Accessories)",
      url: "https://maps.app.goo.gl/hw71g7Nb7aW4KSau5?g_st=ic",
    },
  ]);

  /* =========================
     FACEBOOK PAGES
  ========================= */

  const [facebookPages, setFacebookPages] = useState([
    {
      name: "Hanz's Food Hub Hanz's",
      url: "https://www.facebook.com/share/1LpqCY1TsR/",
    },
    {
      name: "Cyrel Learning Center Padre Garcia Branch",
      url: "https://www.facebook.com/share/1C9Rexydeu/",
    },
    {
      name: "Pro-tech Carwash (Autofixxed and Car Accessories)",
      url: "https://www.facebook.com/share/1FcFnHBPcb/",
    },
    {
      name: "Trese Daily Mart",
      url: "https://www.facebook.com/share/1Da6CiBmAN/",
    },
  ]);

  const [messengerUsername, setMessengerUsername] =
    useState("iyosh carreal de castro");

  const [instagramUsername, setInstagramUsername] =
    useState("");

  /* =========================
     BUTTONS
  ========================= */

  const [buttonText, setButtonText] =
    useState("Get Your Profile");

  const [secondaryButtonText, setSecondaryButtonText] =
    useState("View Profile");

  /* =========================
     ABOUT
  ========================= */

  const [aboutLabel, setAboutLabel] =
    useState("CUSTOMIZATION");

  const [aboutTitle, setAboutTitle] =
    useState("Make Luxtap yours.");

  const [aboutDescription, setAboutDescription] =
    useState(
      "This is a fully customizable digital identity platform. You can change your profile, colors, links, buttons, images and content."
    );

  /* =========================
     FEATURES
  ========================= */

  const [feature1Title, setFeature1Title] =
    useState("Custom Profile");

  const [feature1Description, setFeature1Description] =
    useState(
      "Create a profile that represents your personal identity, business or brand."
    );

  const [feature2Title, setFeature2Title] =
    useState("NFC Ready");

  const [feature2Description, setFeature2Description] =
    useState(
      "Connect your physical NFC card to your digital profile and share it instantly."
    );

  const [feature3Title, setFeature3Title] =
    useState("One Tap");

  const [feature3Description, setFeature3Description] =
    useState(
      "Let people instantly access your contact information and social links."
    );

  /* =========================
     THEME
  ========================= */

  const [background, setBackground] =
    useState("#080b18");

  const [cardBackground, setCardBackground] =
    useState("#151a2d");

  const [accent, setAccent] =
    useState("#ffffff");

  const [textColor, setTextColor] =
    useState("#ffffff");

  /* =========================
     SECTIONS
  ========================= */

  const [showHero, setShowHero] =
    useState(true);

  const [showQuickActions, setShowQuickActions] =
    useState(true);

  const [showFeatures, setShowFeatures] =
    useState(true);

  const [showAbout, setShowAbout] =
    useState(true);

  /* =========================
     QUICK ACTIONS
  ========================= */

  const [showMaps, setShowMaps] =
    useState(true);

  const [showSaveContact, setShowSaveContact] =
    useState(true);

  const [showCall, setShowCall] =
    useState(true);

  const [showEmail, setShowEmail] =
    useState(false);

  /* =========================
     SOCIAL MEDIA TOGGLES
  ========================= */

  const [showFacebook, setShowFacebook] =
    useState(true);

  const [showMessenger, setShowMessenger] =
    useState(true);

  const [showInstagram, setShowInstagram] =
    useState(false);

  /* =========================
     URLS
  ========================= */

  const phoneUrl =
    `tel:${phone.replace(/[^\d+]/g, "")}`;

  const emailUrl =
    `mailto:${email}`;

  const messengerUrl =
    `https://m.me/${messengerUsername
      .replace(/\s+/g, "")
      .replace(/^@/, "")}`;

  const instagramUrl =
    `https://instagram.com/${instagramUsername.replace(
      /^@/,
      ""
    )}`;

  /* =========================
     FACEBOOK FUNCTIONS
  ========================= */

  function addFacebookPage() {
    setFacebookPages((pages) => [
      ...pages,
      {
        name: `Facebook Page ${pages.length + 1}`,
        url: "",
      },
    ]);
  }

  function removeFacebookPage(index: number) {
    setFacebookPages((pages) =>
      pages.filter((_, i) => i !== index)
    );
  }

  function updateFacebookPage(
    index: number,
    field: "name" | "url",
    value: string
  ) {
    setFacebookPages((pages) =>
      pages.map((page, i) =>
        i === index
          ? {
              ...page,
              [field]: value,
            }
          : page
      )
    );
  }

  /* =========================
     GOOGLE MAP FUNCTIONS
  ========================= */

  function addMapLocation() {
    setMapLocations((locations) => [
      ...locations,
      {
        name: `Location ${locations.length + 1}`,
        url: "",
      },
    ]);
  }

  function removeMapLocation(index: number) {
    setMapLocations((locations) =>
      locations.filter((_, i) => i !== index)
    );
  }

  function updateMapLocation(
    index: number,
    field: "name" | "url",
    value: string
  ) {
    setMapLocations((locations) =>
      locations.map((location, i) =>
        i === index
          ? {
              ...location,
              [field]: value,
            }
          : location
      )
    );
  }

  /* =========================
     APPLY THEME
  ========================= */

  function applyTheme(
    themeName: keyof typeof themes
  ) {
    const theme = themes[themeName];

    setBackground(theme.background);
    setCardBackground(theme.cardBackground);
    setAccent(theme.accent);
    setTextColor(theme.textColor);
  }

  /* =========================
     SAVE CONTACT
  ========================= */

  function saveContact() {
    const cleanPhone =
      phone.replace(/[^\d+]/g, "");

    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${fullName}`,
      `TEL:${cleanPhone}`,
      `EMAIL:${email}`,
      `ADR:;;${address}`,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob(
      [vCard],
      {
        type: "text/vcard;charset=utf-8",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      `${fullName
        .replace(/\s+/g, "-")
        .toLowerCase()}.vcf`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (
    <main
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: background,
        color: textColor,
      }}
    >

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{
          backgroundColor: `${background}e8`,
          borderColor: `${textColor}12`,
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="text-xl font-bold tracking-tight">
            {brandName}
          </div>

          <nav className="hidden items-center gap-8 text-sm opacity-70 md:flex">

            <a href="#features">
              Features
            </a>

            <a href="#profile">
              Profile
            </a>

            <a href="#about">
              About
            </a>

          </nav>

          <a
            href="#profile"
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition hover:scale-105"
            style={{
              backgroundColor: accent,
              color: background,
            }}
          >
            Get Started
          </a>

        </div>
      </header>

      {/* ==================================================
          HERO
      ================================================== */}

      {showHero && (
        <section
          id="profile"
          className="mx-auto max-w-7xl px-6 py-20 md:py-28"
        >

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT SIDE */}

            <div>

              <div
                className="mb-6 inline-flex rounded-full border px-4 py-2 text-xs font-medium"
                style={{
                  borderColor: `${textColor}20`,
                  color: accent,
                }}
              >
                NFC • DIGITAL IDENTITY • LU XTAP
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                {headline}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 opacity-60 md:text-lg">
                {description}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <a
                  href="#quick-actions"
                  className="rounded-full px-7 py-3.5 text-sm font-semibold transition hover:scale-105"
                  style={{
                    backgroundColor: accent,
                    color: background,
                  }}
                >
                  {buttonText}
                </a>

                <a
                  href="#about"
                  className="rounded-full border px-7 py-3.5 text-sm font-semibold transition hover:bg-white/5"
                  style={{
                    borderColor: `${textColor}25`,
                  }}
                >
                  {secondaryButtonText}
                </a>

              </div>

            </div>

            {/* RIGHT PROFILE CARD */}

            <div className="flex justify-center lg:justify-end">

              <div
                className="w-full max-w-sm rounded-[32px] border p-7 shadow-2xl"
                style={{
                  backgroundColor: cardBackground,
                  borderColor: `${textColor}15`,
                }}
              >

                {/* PROFILE IMAGE */}

                <div className="flex flex-col items-center text-center">

                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold"
                    style={{
                      backgroundColor: `${accent}15`,
                      color: accent,
                    }}
                  >
                    {fullName
                      .split(" ")
                      .map((name) =>
                        name.charAt(0)
                      )
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>

                  <h2 className="mt-5 text-2xl font-bold">
                    {brandName} Profile
                  </h2>

                  <p className="mt-1 text-sm opacity-50">
                    {fullName}
                  </p>

                </div>

                {/* ==============================
                    QUICK ACTIONS
                ============================== */}

                <div className="mt-7">

                  <p
                    className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{
                      color: accent,
                    }}
                  >
                    Quick Actions
                  </p>

                  <div className="space-y-3">

                    {showMaps &&
                      mapLocations.map(
                        (location, index) =>
                          location.url && (
                            <a
                              key={index}
                              href={location.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-2xl border px-5 py-3 text-center text-sm font-medium transition hover:scale-[1.02]"
                              style={{
                                borderColor: `${textColor}15`,
                              }}
                            >
                              📍 {location.name}
                            </a>
                          )
                      )}

                    {showSaveContact && (
                      <button
                        onClick={saveContact}
                        className="w-full rounded-2xl border px-5 py-3 text-sm font-medium transition hover:scale-[1.02]"
                        style={{
                          borderColor: `${textColor}15`,
                        }}
                      >
                        💾 Save Contact
                      </button>
                    )}

                    {showCall && (
                      <a
                        href={phoneUrl}
                        className="block rounded-2xl border px-5 py-3 text-center text-sm font-medium transition hover:scale-[1.02]"
                        style={{
                          borderColor: `${textColor}15`,
                        }}
                      >
                        📞 Call
                      </a>
                    )}

                    {showEmail && (
                      <a
                        href={emailUrl}
                        className="block rounded-2xl border px-5 py-3 text-center text-sm font-medium transition hover:scale-[1.02]"
                        style={{
                          borderColor: `${textColor}15`,
                        }}
                      >
                        ✉ Email
                      </a>
                    )}

                  </div>

                </div>

                {/* ==============================
                    SOCIAL MEDIA
                ============================== */}

                {(showFacebook ||
                  showMessenger ||
                  showInstagram) && (

                  <div className="mt-8">

                    <p
                      className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{
                        color: accent,
                      }}
                    >
                      Social Media
                    </p>

                    <div className="space-y-3">

                      {/* FACEBOOK */}

                      {showFacebook &&
                        facebookPages.map(
                          (page, index) =>
                            page.url && (
                              <a
                                key={index}
                                href={page.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition hover:scale-[1.02]"
                                style={{
                                  borderColor: `${textColor}15`,
                                }}
                              >

                                <svg
                                  className="h-5 w-5"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1Z" />
                                </svg>

                                <span className="text-center">
                                  {page.name}
                                </span>

                              </a>
                            )
                        )}

                      {/* MESSENGER */}

                      {showMessenger && (
                        <a
                          href={messengerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition hover:scale-[1.02]"
                          style={{
                            borderColor: `${textColor}15`,
                          }}
                        >

                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.48 2 2 5.92 2 10.75c0 2.75 1.4 5.2 3.58 6.8V22l3.3-1.82c1 .28 2.04.43 3.12.43 5.52 0 10-3.92 10-8.75S17.52 2 12 2Zm.99 11.78-2.54-2.7-4.96 2.7 5.47-5.81 2.6 2.7 2.6 2.7 4.9-2.7-5.47 5.81Z" />
                          </svg>

                          Messenger

                        </a>
                      )}

                      {/* INSTAGRAM */}

                      {showInstagram && (
                        <a
                          href={instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition hover:scale-[1.02]"
                          style={{
                            borderColor: `${textColor}15`,
                          }}
                        >

                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="5"
                            />

                            <circle
                              cx="12"
                              cy="12"
                              r="4"
                            />

                            <circle
                              cx="17.5"
                              cy="6.5"
                              r="1"
                              fill="currentColor"
                              stroke="none"
                            />
                          </svg>

                          Instagram

                        </a>
                      )}

                    </div>

                  </div>
                )}

                <p className="mt-6 text-center text-xs opacity-40">
                  Tap to connect
                </p>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* ==================================================
          CUSTOMIZATION SECTION
      ================================================== */}

      {showAbout && (
        <section
          id="about"
          className="border-y px-6 py-24"
          style={{
            borderColor: `${textColor}10`,
          }}
        >

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{
                  color: accent,
                }}
              >
                {aboutLabel}
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                {aboutTitle}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 opacity-60">
                {aboutDescription}
              </p>

            </div>

            {/* RIGHT THEME SELECTOR */}

            <div
              className="rounded-3xl border p-6"
              style={{
                backgroundColor: cardBackground,
                borderColor: `${textColor}15`,
              }}
            >

              <p className="text-sm font-semibold">
                Choose your style
              </p>

              <p className="mt-1 text-xs opacity-50">
                Select a theme for this client.
              </p>

              <div className="mt-5 space-y-3">

                {(Object.keys(themes) as Array<
                  keyof typeof themes
                >).map((themeName) => {

                  const theme =
                    themes[themeName];

                  const selected =
                    background === theme.background &&
                    cardBackground ===
                      theme.cardBackground;

                  return (
                    <button
                      key={themeName}
                      type="button"
                      onClick={() =>
                        applyTheme(themeName)
                      }
                      className="w-full rounded-2xl border p-4 text-left transition hover:scale-[1.01]"
                      style={{
                        borderColor: selected
                          ? accent
                          : `${textColor}15`,
                      }}
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className="h-10 w-10 rounded-full border"
                          style={{
                            backgroundColor:
                              theme.background,
                            borderColor:
                              theme.accent,
                          }}
                        />

                        <div className="min-w-0">

                          <div className="font-semibold">
                            {themeName}
                          </div>

                          <div className="mt-1 text-xs leading-5 opacity-50">
                            {theme.description}
                          </div>

                        </div>

                        {selected && (
                          <div
                            className="ml-auto h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor: accent,
                            }}
                          />
                        )}

                      </div>

                    </button>
                  );
                })}

              </div>

            </div>

          </div>

        </section>
      )}

      {/* ==================================================
          FEATURES
      ================================================== */}

      {showFeatures && (
        <section
          id="features"
          className="px-6 py-24"
        >

          <div className="mx-auto max-w-7xl">

            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{
                color: accent,
              }}
            >
              FEATURES
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Everything in one profile.
            </h2>

            <p className="mt-4 max-w-2xl text-base opacity-50">
              Customize every explanation for every client.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-3">

              <FeatureCard
                title={feature1Title}
                description={feature1Description}
                background={cardBackground}
                textColor={textColor}
              />

              <FeatureCard
                title={feature2Title}
                description={feature2Description}
                background={cardBackground}
                textColor={textColor}
              />

              <FeatureCard
                title={feature3Title}
                description={feature3Description}
                background={cardBackground}
                textColor={textColor}
              />

            </div>

          </div>

        </section>
      )}

      {/* ==================================================
          QUICK ACTIONS
      ================================================== */}

      {showQuickActions && (
        <section
          id="quick-actions"
          className="px-6 pb-16"
        >

          <div className="mx-auto max-w-7xl">

            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{
                color: accent,
              }}
            >
              CONNECT
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Quick Actions
            </h2>

            <p className="mt-2 max-w-xl text-sm opacity-50">
              Direct ways to contact or connect with this profile.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">

              {showMaps &&
                mapLocations.map(
                  (location, index) =>
                    location.url && (
                      <ActionButton
                        key={index}
                        href={location.url}
                        label={location.name}
                        icon="📍"
                        borderColor={`${textColor}15`}
                        external
                      />
                    )
                )}

              {showSaveContact && (
                <button
                  onClick={saveContact}
                  className="rounded-2xl border p-5 text-center transition hover:scale-[1.02]"
                  style={{
                    borderColor: `${textColor}15`,
                  }}
                >

                  <div className="text-xl">
                    💾
                  </div>

                  <div className="mt-2 text-sm font-semibold">
                    Save Contact
                  </div>

                </button>
              )}

              {showCall && (
                <ActionButton
                  href={phoneUrl}
                  label="Call"
                  icon="📞"
                  borderColor={`${textColor}15`}
                />
              )}

              {showEmail && (
                <ActionButton
                  href={emailUrl}
                  label="Email"
                  icon="✉"
                  borderColor={`${textColor}15`}
                />
              )}

            </div>

          </div>

        </section>
      )}

      {/* ==================================================
          SOCIAL MEDIA
      ================================================== */}

      {showQuickActions && (
        <section
          id="social-media"
          className="px-6 pb-24"
        >

          <div className="mx-auto max-w-7xl">

            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{
                color: accent,
              }}
            >
              SOCIAL
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Social Media
            </h2>

            <p className="mt-2 max-w-xl text-sm opacity-50">
              Find and connect with this profile on social media.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3">

              {showFacebook &&
                facebookPages.map(
                  (page, index) =>
                    page.url && (
                      <SocialButton
                        key={index}
                        href={page.url}
                        label={page.name}
                        type="facebook"
                        borderColor={`${textColor}15`}
                      />
                    )
                )}

              {showMessenger && (
                <SocialButton
                  href={messengerUrl}
                  label="Messenger"
                  type="messenger"
                  borderColor={`${textColor}15`}
                />
              )}

              {showInstagram && (
                <SocialButton
                  href={instagramUrl}
                  label="Instagram"
                  type="instagram"
                  borderColor={`${textColor}15`}
                />
              )}

            </div>

          </div>

        </section>
      )}

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer
        className="border-t px-6 py-10 text-center text-sm opacity-40"
        style={{
          borderColor: `${textColor}10`,
        }}
      >
        © 2026 {brandName}. All rights reserved.
      </footer>

    </main>
  );
}

/* ==================================================
   FEATURE CARD
================================================== */

function FeatureCard({
  title,
  description,
  background,
  textColor,
}: {
  title: string;
  description: string;
  background: string;
  textColor: string;
}) {
  return (
    <div
      className="rounded-3xl border p-7 transition hover:-translate-y-1"
      style={{
        backgroundColor: background,
        borderColor: `${textColor}15`,
      }}
    >

      <div
        className="mb-7 h-10 w-10 rounded-xl"
        style={{
          backgroundColor: `${textColor}10`,
        }}
      />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 opacity-50">
        {description}
      </p>

    </div>
  );
}

/* ==================================================
   QUICK ACTION BUTTON
================================================== */

function ActionButton({
  href,
  label,
  icon,
  borderColor,
  external = false,
}: {
  href: string;
  label: string;
  icon: string;
  borderColor: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      className="rounded-2xl border p-5 text-center transition hover:scale-[1.02]"
      style={{
        borderColor,
      }}
    >

      <div className="text-xl">
        {icon}
      </div>

      <div className="mt-2 text-sm font-semibold">
        {label}
      </div>

    </a>
  );
}

/* ==================================================
   SOCIAL MEDIA BUTTON
================================================== */

function SocialButton({
  href,
  label,
  type,
  borderColor,
}: {
  href: string;
  label: string;
  type:
    | "facebook"
    | "messenger"
    | "instagram";
  borderColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 rounded-2xl border p-5 text-center transition hover:scale-[1.02]"
      style={{
        borderColor,
      }}
    >

      {/* FACEBOOK ICON */}

      {type === "facebook" && (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1Z" />
        </svg>
      )}

      {/* MESSENGER ICON */}

      {type === "messenger" && (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 5.92 2 10.75c0 2.75 1.4 5.2 3.58 6.8V22l3.3-1.82c1 .28 2.04.43 3.12.43 5.52 0 10-3.92 10-8.75S17.52 2 12 2Zm.99 11.78-2.54-2.7-4.96 2.7 5.47-5.81 2.6 2.7 2.6 2.7 4.9-2.7-5.47 5.81Z" />
        </svg>
      )}

      {/* INSTAGRAM ICON */}

      {type === "instagram" && (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
          />

          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      )}

      <span className="text-sm font-semibold">
        {label}
      </span>

    </a>
  );
}