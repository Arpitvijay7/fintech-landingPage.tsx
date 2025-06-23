// Single_File_Substack_Clone.tsx
// Note: This is a single-file representation of a Next.js application, combining multiple components,
// pages, and styles. In a real-world Next.js project, these would be organized into separate files
// and folders (e.g., components/, pages/ or app/, styles/, etc.).
// Backend functionalities (database, payments, email sending, true analytics, scheduling) are mocked
// or represented conceptually.

import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  ReactNode,
} from "react";
import Head from "next/head";
// import Image from 'next/image'; // Uncomment if you add actual images and optimize them
// import Link from 'next/link'; // In a real Next.js app, use Link for navigation. Here, navigation is simulated.

// --- TYPE DEFINITIONS ---
interface Post {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorId: string;
  date: string;
  excerpt: string;
  content: string; // Markdown content
  tags: string[];
  imageUrl?: string;
  premium: boolean; // True if this is a premium post
  views?: number; // For analytics placeholder
  commentsCount?: number; // For analytics placeholder
}

interface Comment {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  text: string;
  date: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  subscriptionTier: "free" | "premium" | "none";
  savedArticles: string[]; // array of post IDs
  commentHistory: Comment[];
}

interface SubscriptionTier {
  id: "free" | "premium";
  name: string;
  price: string;
  features: string[];
}

// --- CONSTANTS & MOCK DATA ---
const SITE_NAME = "Inkwell Insights";

const COOL_REVIVAL_PALETTE = {
  primary: "#0A4F6B", // Deep Teal / Peacock Blue
  secondary: "#FF7F50", // Muted Coral
  accent: "#FFDB58", // Mustard Yellow
  background: "#F8F6F2", // Off-white, slightly warm
  surface: "#FFFFFF", // For cards, modals
  textPrimary: "#2F4F4F", // Dark Slate Gray
  textSecondary: "#5F7F7F", // Muted Slate Gray
  border: "#D3D3D3", // Light Grey
  success: "#4CAF50",
  error: "#F44336",
};

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    slug: "the-future-of-ai-in-writing",
    title: "The Future of AI in Writing",
    author: "Dr. Ada Lovelace",
    authorId: "user1",
    date: "2023-10-26",
    excerpt:
      "Exploring how artificial intelligence is reshaping the landscape of content creation and journalism.",
    content: `## The Rise of AI Co-authors\n\nArtificial Intelligence (AI) is no longer a futuristic concept but a present-day reality transforming various industries, including writing. From drafting emails to generating complex narratives, AI tools are becoming indispensable for writers, editors, and content creators.\n\n### Key Areas of Impact:\n\n*   **Content Generation:** AI can produce articles, blog posts, and even fictional stories with minimal human input.\n*   **Editing and Proofreading:** Advanced AI algorithms can detect grammatical errors, suggest stylistic improvements, and ensure consistency.\n*   **Personalization:** AI enables tailoring content to individual reader preferences, enhancing engagement.\n\nWhile AI offers immense potential, it also raises ethical questions about authorship, originality, and the role of human creativity. This post delves into these aspects, offering a balanced view of AI's future in the written world.\n\n> "The best way to predict the future is to invent it." - Alan Kay\n\nThis is a **premium** section, visible only to subscribers. AI will likely augment human writers, not replace them entirely, fostering a new era of collaborative creation.`,
    tags: ["AI", "Writing", "Technology", "Future"],
    imageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    premium: true,
    views: 1250,
    commentsCount: 42,
  },
  {
    id: "2",
    slug: "sustainable-living-tips",
    title: "10 Simple Tips for Sustainable Living",
    author: "Mr. Eco Green",
    authorId: "user2",
    date: "2023-10-20",
    excerpt:
      "Practical advice for adopting a more environmentally friendly lifestyle without drastic changes.",
    content: `## Embrace Eco-Friendly Habits\n\nLiving sustainably doesn't require overhauling your entire life. Small, consistent changes can make a big difference. Here are ten simple tips:\n\n1.  **Reduce, Reuse, Recycle:** The classic mantra still holds true.\n2.  **Conserve Water:** Fix leaks, take shorter showers.\n3.  **Save Energy:** Switch to LED bulbs, unplug unused electronics.\n4.  **Eat Less Meat:** Especially red meat, which has a high carbon footprint.\n5.  **Shop Local & Seasonal:** Support local farmers and reduce food miles.\n6.  **Use Reusable Bags:** Ditch single-use plastics.\n7.  **Compost Food Scraps:** Reduce landfill waste and enrich your garden.\n8.  **Choose Eco-Friendly Products:** Look for sustainable materials and packaging.\n9.  **Walk, Bike, or Use Public Transport:** Reduce your reliance on cars.\n10. **Educate Yourself & Others:** Spread awareness about environmental issues.\n\nEvery small step contributes to a larger positive impact on our planet.`,
    tags: ["Sustainability", "Lifestyle", "Environment"],
    premium: false,
    views: 850,
    commentsCount: 23,
  },
];

const MOCK_USER: User = {
  id: "currentUser123",
  name: "Jane Reader",
  email: "jane.reader@example.com",
  avatarUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=60",
  bio: "Avid reader and lifelong learner. Loves exploring new ideas and perspectives.",
  subscriptionTier: "free",
  savedArticles: ["2"],
  commentHistory: [
    {
      id: "c1",
      postId: "2",
      userId: "currentUser123",
      userName: "Jane Reader",
      text: "Great tips! Trying to incorporate more of these into my daily routine.",
      date: "2023-10-21",
    },
  ],
};

const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: "free",
    name: "Free Tier",
    price: "$0/month",
    features: [
      "Access to public posts",
      "Occasional newsletter updates",
      "Ability to comment",
    ],
  },
  {
    id: "premium",
    name: "Premium Access",
    price: "$10/month",
    features: [
      "Access all public and premium posts",
      "Full newsletter archive",
      "Exclusive content",
      "Ad-free experience",
      "Priority support",
    ],
  },
];

// --- HELPER & UI COMPONENTS ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className || ""}`}
      {...props}
    >
      {children}
      <style jsx>{`
        .btn {
          padding: ${size === "sm"
            ? "0.4rem 0.8rem"
            : size === "lg"
            ? "0.8rem 1.6rem"
            : "0.6rem 1.2rem"};
          font-size: ${size === "sm"
            ? "0.875rem"
            : size === "lg"
            ? "1.125rem"
            : "1rem"};
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease,
            box-shadow 0.2s ease;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none; /* For Link compatibility */
        }
        .btn:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--background-color),
            0 0 0 4px var(--primary-color);
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
        .btn-primary:hover:not(:disabled) {
          background-color: color-mix(in srgb, var(--primary-color) 90%, black);
          box-shadow: var(--semi-flat-shadow-hover);
        }
        .btn-secondary {
          background-color: var(--secondary-color);
          color: white;
          border-color: var(--secondary-color);
        }
        .btn-secondary:hover:not(:disabled) {
          background-color: color-mix(
            in srgb,
            var(--secondary-color) 90%,
            black
          );
          box-shadow: var(--semi-flat-shadow-hover);
        }
        .btn-outline {
          background-color: transparent;
          color: var(--primary-color);
          border-color: var(--primary-color);
        }
        .btn-outline:hover:not(:disabled) {
          background-color: color-mix(
            in srgb,
            var(--primary-color) 10%,
            transparent
          );
        }
        .btn-ghost {
          background-color: transparent;
          color: var(--text-primary);
          border-color: transparent;
        }
        .btn-ghost:hover:not(:disabled) {
          background-color: color-mix(
            in srgb,
            var(--text-primary) 10%,
            transparent
          );
        }
      `}</style>
    </button>
  );
};

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={`card ${className || ""} ${onClick ? "clickable" : ""}`}
      onClick={onClick}
    >
      {children}
      <style jsx>{`
        .card {
          background-color: var(--surface-color);
          border-radius: 8px;
          box-shadow: var(--semi-flat-shadow);
          padding: 1.5rem;
          transition: box-shadow 0.2s ease-in-out;
          border: 1px solid var(--border-color);
        }
        .card.clickable:hover {
          box-shadow: var(--semi-flat-shadow-hover);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background-color: var(--surface-color);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          width: 90%;
          max-width: 500px;
          animation: slide-down 0.3s ease-out;
        }
        @keyframes slide-down {
          from {
            transform: translateY(-30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: var(--text-primary);
        }
        .close-button {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--text-secondary);
        }
        .modal-body {
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

// --- LAYOUT COMPONENTS ---

interface AppHeaderProps {
  onNavigate: (view: PageView, params?: any) => void;
  currentUser: User | null;
}

const AppHeader: React.FC<AppHeaderProps> = ({ onNavigate, currentUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="container">
        <div
          className="logo"
          onClick={() => onNavigate("home")}
          role="button"
          tabIndex={0}
        >
          {SITE_NAME}
        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* In a real app, use <Link href="/">Home</Link> etc. */}
          <a
            onClick={() => {
              onNavigate("home");
              setMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            onClick={() => {
              onNavigate("subscriptions");
              setMenuOpen(false);
            }}
          >
            Subscribe
          </a>
          {currentUser && (
            <a
              onClick={() => {
                onNavigate("editor");
                setMenuOpen(false);
              }}
            >
              Write Post
            </a>
          )}
          {currentUser && (
            <a
              onClick={() => {
                onNavigate("adminAnalytics");
                setMenuOpen(false);
              }}
            >
              Analytics
            </a>
          )}
        </nav>
        <div className="user-actions">
          {currentUser ? (
            <div
              className="profile-icon"
              onClick={() => onNavigate("profile")}
              role="button"
              tabIndex={0}
            >
              {currentUser.avatarUrl ? (
                <img src={currentUser.avatarUrl} alt={currentUser.name} />
              ) : (
                currentUser.name.charAt(0)
              )}
            </div>
          ) : (
            <Button
              onClick={() => alert("Login functionality placeholder")}
              size="sm"
            >
              Login
            </Button>
          )}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <style jsx>{`
        .app-header {
          background-color: var(--surface-color);
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--semi-flat-shadow);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: var(--primary-color);
          cursor: pointer;
        }
        .nav-links a {
          margin: 0 1rem;
          color: var(--text-primary);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--primary-color);
        }
        .profile-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--accent-color);
          color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          cursor: pointer;
          overflow: hidden;
        }
        .profile-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--primary-color);
          cursor: pointer;
        }
        .user-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--surface-color);
            flex-direction: column;
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
            box-shadow: var(--semi-flat-shadow);
          }
          .nav-links.open {
            display: flex;
          }
          .nav-links a {
            margin: 0.5rem 0;
            padding: 0.5rem;
            border-radius: 4px;
          }
          .nav-links a:hover {
            background-color: color-mix(
              in srgb,
              var(--primary-color) 10%,
              transparent
            );
          }
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

const AppFooter: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
        <div className="footer-links">
          {/* In a real app, use <Link href="/about">About</Link> etc. */}
          <a onClick={() => alert("Navigate to About page (placeholder)")}>
            About
          </a>
          <a onClick={() => alert("Navigate to Contact page (placeholder)")}>
            Contact
          </a>
          <a
            onClick={() =>
              alert("Navigate to Privacy Policy page (placeholder)")
            }
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <style jsx>{`
        .app-footer {
          background-color: var(--text-primary);
          color: var(--background-color);
          padding: 2rem 0;
          margin-top: 3rem;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .footer-links {
          margin-top: 0.5rem;
        }
        .footer-links a {
          color: var(--accent-color);
          margin: 0 0.5rem;
          text-decoration: none;
          cursor: pointer;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

interface MainLayoutProps {
  children: ReactNode;
  onNavigate: (view: PageView, params?: any) => void;
  currentUser: User | null;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  onNavigate,
  currentUser,
}) => {
  return (
    <>
      <AppHeader onNavigate={onNavigate} currentUser={currentUser} />
      <main className="main-content">{children}</main>
      <AppFooter />
      <style jsx>{`
        .main-content {
          max-width: 1100px;
          margin: 2rem auto;
          padding: 0 1rem;
          min-height: calc(
            100vh - 250px
          ); /* Adjust based on header/footer height */
        }
      `}</style>
    </>
  );
};

// --- PAGE COMPONENTS ---

interface PostCardProps {
  post: Post;
  onNavigate: (view: PageView, params: { slug: string }) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onNavigate }) => {
  return (
    <Card
      className="post-card"
      onClick={() => onNavigate("post", { slug: post.slug })}
    >
      {post.imageUrl && (
        <div className="post-card-image-container">
          {/* In real app: <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" /> */}
          <img
            src={post.imageUrl}
            alt={post.title}
            className="post-card-image"
          />
        </div>
      )}
      <div className="post-card-content">
        <h3>
          {post.title}{" "}
          {post.premium && <span className="premium-badge">Premium</span>}
        </h3>
        <p className="post-meta">
          By {post.author} on {new Date(post.date).toLocaleDateString()}
        </p>
        <p className="excerpt">{post.excerpt}</p>
        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .post-card {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .post-card-image-container {
          width: 100%;
          height: 200px; /* Fixed height for consistency */
          position: relative;
          overflow: hidden;
          border-radius: 8px 8px 0 0; /* Match card top radius */
        }
        .post-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .post-card:hover .post-card-image {
          transform: scale(1.05);
        }
        .post-card-content {
          padding-top: ${post.imageUrl ? "1rem" : "0"};
        }
        .post-card h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
          font-size: 1.5rem;
        }
        .premium-badge {
          font-size: 0.7rem;
          background-color: var(--accent-color);
          color: var(--primary-color);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          margin-left: 0.5rem;
          vertical-align: middle;
          font-weight: bold;
        }
        .post-meta {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .excerpt {
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tag {
          background-color: color-mix(
            in srgb,
            var(--secondary-color) 20%,
            transparent
          );
          color: var(--secondary-color);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }
      `}</style>
    </Card>
  );
};

interface HomePageProps {
  posts: Post[];
  onNavigate: (view: PageView, params?: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ posts, onNavigate }) => {
  return (
    <div>
      <Head>
        <title>{SITE_NAME} - Home</title>
        <meta
          name="description"
          content={`Welcome to ${SITE_NAME}, your source for insightful articles.`}
        />
      </Head>
      <h1 className="page-title">Latest Articles</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onNavigate={onNavigate} />
        ))}
      </div>
      <style jsx>{`
        .page-title {
          color: var(--primary-color);
          margin-bottom: 2rem;
          text-align: center;
        }
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        @media (max-width: 600px) {
          .posts-grid {
            grid-template-columns: 1fr; /* Single column on small screens */
          }
        }
      `}</style>
    </div>
  );
};

interface PostPageProps {
  slug: string | undefined;
  currentUser: User | null;
  onNavigate: (view: PageView, params?: any) => void;
}

const PostPage: React.FC<PostPageProps> = ({
  slug,
  currentUser,
  onNavigate,
}) => {
  const post = MOCK_POSTS.find((p) => p.slug === slug);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  if (!post) {
    return (
      <div>
        Post not found.{" "}
        <Button onClick={() => onNavigate("home")}>Go Home</Button>
      </div>
    );
  }

  const canViewContent =
    !post.premium ||
    (currentUser && currentUser.subscriptionTier === "premium");

  // Basic Markdown to HTML (very simplified)
  const renderMarkdown = (markdown: string) => {
    return markdown
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*(.*)\*/gim, "<em>$1</em>")
      .replace(
        /\[(.*?)\]\((.*?)\)/gim,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
      .replace(/\n/g, "<br />");
  };

  const handleSubscribeClick = () => {
    if (!currentUser) {
      alert("Please log in to subscribe."); // Placeholder for login flow
    } else {
      setShowPaymentModal(true);
    }
  };

  const processPayment = () => {
    alert(
      `Payment processing for ${
        SUBSCRIPTION_TIERS.find((t) => t.id === "premium")?.name
      }. This is a mock action.`
    );
    // In a real app, this would involve updating user's subscriptionTier
    // For this demo, let's assume payment is successful and update the mock user
    if (currentUser) {
      // This is a hack for demo purposes. User state should be managed globally.
      // We're modifying a mock constant here, which isn't ideal.
      MOCK_USER.subscriptionTier = "premium";
      alert("Subscription successful! You now have premium access.");
    }
    setShowPaymentModal(false);
    // Force a re-render might be needed if user object isn't reactive, or navigate away and back
    // For this demo, the page will re-evaluate canViewContent on next interaction if needed.
  };

  return (
    <article className="post-page">
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        <meta property="og:type" content="article" />
        {/* Add more SEO tags as needed: canonical URL, author, etc. */}
      </Head>

      {post.imageUrl && (
        <div className="post-hero-image-container">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="post-hero-image"
          />
        </div>
      )}

      <h1>{post.title}</h1>
      <p className="post-meta">
        By {post.author} on {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {canViewContent ? (
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      ) : (
        <div className="premium-blocker">
          <p>{post.excerpt}</p>
          <div className="premium-message">
            <h3>Unlock Full Access</h3>
            <p>
              This is a premium post. Subscribe to read the full article and get
              access to all exclusive content.
            </p>
            <Button variant="primary" size="lg" onClick={handleSubscribeClick}>
              Subscribe Now
            </Button>
          </div>
        </div>
      )}

      <div className="comments-section">
        <h3>Comments ({post.commentsCount || 0})</h3>
        {/* Placeholder for comments list and form */}
        <p>Comments feature coming soon.</p>
      </div>

      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="Subscribe to Premium"
      >
        <h4>Confirm Subscription</h4>
        <p>
          You are about to subscribe to the{" "}
          <strong>
            {SUBSCRIPTION_TIERS.find((t) => t.id === "premium")?.name}
          </strong>{" "}
          tier for{" "}
          <strong>
            {SUBSCRIPTION_TIERS.find((t) => t.id === "premium")?.price}
          </strong>
          .
        </p>
        <p>This is a mock payment flow. No real transaction will occur.</p>
        <Button
          variant="primary"
          onClick={processPayment}
          style={{ marginRight: "1rem" }}
        >
          Confirm Payment
        </Button>
        <Button variant="outline" onClick={() => setShowPaymentModal(false)}>
          Cancel
        </Button>
      </Modal>

      <style jsx>{`
        .post-page {
          max-width: 800px;
          margin: 0 auto;
        }
        .post-hero-image-container {
          width: 100%;
          max-height: 400px;
          overflow: hidden;
          margin-bottom: 2rem;
          border-radius: 8px;
        }
        .post-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .post-page h1 {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .post-meta {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .tags {
          margin-bottom: 2rem;
        }
        .tag {
          background-color: color-mix(
            in srgb,
            var(--secondary-color) 20%,
            transparent
          );
          color: var(--secondary-color);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          margin-right: 0.5rem;
        }
        .post-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-primary);
        }
        .post-content :global(h2) {
          /* Style content from dangerouslySetInnerHTML */
          font-size: 1.8rem;
          color: var(--primary-color);
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .post-content :global(h3) {
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .post-content :global(blockquote) {
          border-left: 4px solid var(--accent-color);
          padding-left: 1rem;
          margin-left: 0;
          font-style: italic;
          color: var(--text-secondary);
        }
        .post-content :global(a) {
          color: var(--secondary-color);
          text-decoration: none;
        }
        .post-content :global(a:hover) {
          text-decoration: underline;
        }
        .premium-blocker {
          margin-top: 2rem;
          padding: 1.5rem;
          background-color: color-mix(
            in srgb,
            var(--accent-color) 15%,
            transparent
          );
          border: 1px solid var(--accent-color);
          border-radius: 8px;
          text-align: center;
        }
        .premium-message h3 {
          color: var(--primary-color);
          font-size: 1.5rem;
        }
        .comments-section {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }
        .comments-section h3 {
          color: var(--primary-color);
        }
      `}</style>
    </article>
  );
};

interface SubscriptionTierCardProps {
  tier: SubscriptionTier;
  onSubscribe: (tierId: "free" | "premium") => void;
  isCurrentUserTier: boolean;
}

const SubscriptionTierCard: React.FC<SubscriptionTierCardProps> = ({
  tier,
  onSubscribe,
  isCurrentUserTier,
}) => {
  return (
    <Card className={`tier-card ${isCurrentUserTier ? "current-tier" : ""}`}>
      <h3>{tier.name}</h3>
      <p className="price">{tier.price}</p>
      <ul className="features">
        {tier.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {isCurrentUserTier ? (
        <Button variant="outline" disabled>
          Current Plan
        </Button>
      ) : (
        <Button variant="primary" onClick={() => onSubscribe(tier.id)}>
          {tier.id === "free" ? "Get Started" : "Subscribe"}
        </Button>
      )}
      <style jsx>{`
        .tier-card {
          text-align: center;
          border: 2px solid var(--border-color);
        }
        .tier-card.current-tier {
          border-color: var(--primary-color);
          box-shadow: 0 0 15px
            color-mix(in srgb, var(--primary-color) 30%, transparent);
        }
        .tier-card h3 {
          color: var(--primary-color);
          font-size: 1.8rem;
        }
        .price {
          font-size: 2rem;
          font-weight: bold;
          color: var(--secondary-color);
          margin: 1rem 0;
        }
        .features {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          min-height: 100px; /* Ensure consistent height */
        }
        .features li {
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
      `}</style>
    </Card>
  );
};

interface SubscriptionPageProps {
  currentUser: User | null;
  onNavigate: (view: PageView, params?: any) => void;
}

const SubscriptionPage: React.FC<SubscriptionPageProps> = ({
  currentUser,
  onNavigate,
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleSubscribe = (tierId: "free" | "premium") => {
    if (tierId === "free") {
      alert(
        "You are already on the free plan or can access free content. Login to manage subscription."
      );
      return;
    }
    if (!currentUser) {
      alert("Please log in to subscribe."); // Placeholder
      return;
    }
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    alert(
      `Payment processing for ${
        SUBSCRIPTION_TIERS.find((t) => t.id === "premium")?.name
      }. This is a mock action.`
    );
    if (currentUser) {
      MOCK_USER.subscriptionTier = "premium";
    } // Hack for demo
    setShowPaymentModal(false);
    onNavigate("profile"); // Navigate to profile to see updated status
  };

  return (
    <div>
      <Head>
        <title>Subscription Tiers - {SITE_NAME}</title>
        <meta
          name="description"
          content={`Choose a subscription plan for ${SITE_NAME}.`}
        />
      </Head>
      <h1 className="page-title">Choose Your Plan</h1>
      <div className="tiers-grid">
        {SUBSCRIPTION_TIERS.map((tier) => (
          <SubscriptionTierCard
            key={tier.id}
            tier={tier}
            onSubscribe={handleSubscribe}
            isCurrentUserTier={currentUser?.subscriptionTier === tier.id}
          />
        ))}
      </div>
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="Subscribe to Premium"
      >
        <h4>Confirm Subscription</h4>
        <p>
          You are about to subscribe to the{" "}
          <strong>
            {SUBSCRIPTION_TIERS.find((t) => t.id === "premium")?.name}
          </strong>{" "}
          tier for{" "}
          <strong>
            {SUBSCRIPTION_TIERS.find((t) => t.id === "premium")?.price}
          </strong>
          .
        </p>
        <p>This is a mock payment flow. No real transaction will occur.</p>
        <Button
          variant="primary"
          onClick={processPayment}
          style={{ marginRight: "1rem" }}
        >
          Confirm Payment
        </Button>
        <Button variant="outline" onClick={() => setShowPaymentModal(false)}>
          Cancel
        </Button>
      </Modal>
      <style jsx>{`
        .page-title {
          color: var(--primary-color);
          text-align: center;
          margin-bottom: 2rem;
        }
        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

interface ProfilePageProps {
  user: User;
  posts: Post[];
  onNavigate: (view: PageView, params?: any) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  user,
  posts,
  onNavigate,
}) => {
  const savedPosts = posts.filter((post) =>
    user.savedArticles.includes(post.id)
  );

  return (
    <div>
      <Head>
        <title>
          {user.name}'s Profile - {SITE_NAME}
        </title>
      </Head>
      <Card>
        <div className="profile-header">
          {user.avatarUrl && (
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="profile-avatar"
            />
          )}
          <div>
            <h1>{user.name}</h1>
            <p className="email">{user.email}</p>
            <p className="bio">{user.bio || "No bio provided."}</p>
            <p>
              Subscription Status:{" "}
              <span className="status-badge">
                {user.subscriptionTier.toUpperCase()}
              </span>
            </p>
            <Button onClick={() => onNavigate("subscriptions")} size="sm">
              Manage Subscription
            </Button>
          </div>
        </div>
      </Card>

      <div className="profile-section">
        <h2>Saved Articles</h2>
        {savedPosts.length > 0 ? (
          <div className="posts-grid">
            {savedPosts.map((post) => (
              <PostCard key={post.id} post={post} onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          <p>No articles saved yet.</p>
        )}
      </div>

      <div className="profile-section">
        <h2>Comment History</h2>
        {user.commentHistory.length > 0 ? (
          <ul className="comment-list">
            {user.commentHistory.map((comment) => (
              <li key={comment.id} className="comment-item">
                <p>
                  On post "
                  {posts.find((p) => p.id === comment.postId)?.title ||
                    "Unknown Post"}
                  ":
                </p>
                <blockquote>"{comment.text}"</blockquote>
                <small>{new Date(comment.date).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments made yet.</p>
        )}
      </div>
      <style jsx>{`
        .profile-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .profile-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--primary-color);
        }
        .profile-header h1 {
          margin: 0 0 0.25rem 0;
          color: var(--primary-color);
        }
        .email,
        .bio {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .status-badge {
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-weight: bold;
          background-color: ${user.subscriptionTier === "premium"
            ? "var(--accent-color)"
            : "var(--border-color)"};
          color: ${user.subscriptionTier === "premium"
            ? "var(--primary-color)"
            : "var(--text-secondary)"};
        }
        .profile-section {
          margin-top: 2.5rem;
        }
        .profile-section h2 {
          color: var(--primary-color);
          border-bottom: 2px solid var(--accent-color);
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        .comment-list {
          list-style: none;
          padding: 0;
        }
        .comment-item {
          background-color: var(--surface-color);
          padding: 1rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          border: 1px solid var(--border-color);
        }
        .comment-item blockquote {
          margin: 0.5rem 0;
          padding-left: 1rem;
          border-left: 3px solid var(--secondary-color);
          font-style: italic;
          color: var(--text-primary);
        }
        .comment-item small {
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

interface TextEditorComponentProps {
  onPublish: (postContent: {
    title: string;
    content: string;
    isPremium: boolean;
  }) => void;
}

const TextEditorComponent: React.FC<TextEditorComponentProps> = ({
  onPublish,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Markdown content
  const [isPremium, setIsPremium] = useState(false);
  const [scheduledDate, setScheduledDate] = useState("");

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }
    onPublish({ title, content, isPremium });
    // Reset form
    setTitle("");
    setContent("");
    setIsPremium(false);
    setScheduledDate("");
  };

  const handleSchedule = () => {
    if (!scheduledDate) {
      alert("Please select a date and time to schedule.");
      return;
    }
    alert(
      `Post "${title}" scheduled for ${new Date(
        scheduledDate
      ).toLocaleString()}. (This is a mock action)`
    );
    handlePublish(); // For demo, just publish it now
  };

  // Basic Markdown to HTML for preview
  const renderPreviewMarkdown = (markdown: string) => {
    return markdown
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*(.*)\*/gim, "<em>$1</em>")
      .replace(
        /\[(.*?)\]\((.*?)\)/gim,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      .replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>")
      .replace(/\n/g, "<br />");
  };

  return (
    <Card className="editor-container">
      <Head>
        <title>Create New Post - {SITE_NAME}</title>
      </Head>
      <h2>Create New Post</h2>
      <div className="form-group">
        <label htmlFor="post-title">Title</label>
        <input
          type="text"
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your amazing post title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="post-content">Content (Markdown supported)</label>
        <textarea
          id="post-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
          placeholder="Write your masterpiece here..."
        />
      </div>

      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="is-premium"
          checked={isPremium}
          onChange={(e) => setIsPremium(e.target.checked)}
        />
        <label htmlFor="is-premium">Mark as Premium Content</label>
      </div>

      <div className="editor-actions">
        <Button variant="primary" onClick={handlePublish}>
          Publish Now
        </Button>
        <div className="schedule-group">
          <input
            type="datetime-local"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            className="schedule-input"
          />
          <Button
            variant="outline"
            onClick={handleSchedule}
            disabled={!scheduledDate}
          >
            Schedule Post
          </Button>
        </div>
      </div>

      <div className="preview-section">
        <h3>Live Preview (Basic)</h3>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={{
            __html: renderPreviewMarkdown(
              content || "Start typing to see a preview..."
            ),
          }}
        ></div>
      </div>

      <div className="email-template-preview-placeholder">
        <h4>Conceptual Email Template Preview</h4>
        <div className="email-mockup">
          <p>
            <strong>Subject:</strong> {title || "[Your Post Title]"}
          </p>
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: renderPreviewMarkdown(
                content ||
                  "Your content will appear here in an email-styled format."
              ),
            }}
          ></div>
          <hr />
          <p>
            <small>To unsubscribe, click here (placeholder).</small>
          </p>
        </div>
      </div>
      <style jsx>{`
        .editor-container h2 {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .form-group input[type="text"],
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 1rem;
          box-sizing: border-box; /* Ensures padding doesn't increase width */
        }
        .form-group input[type="text"]:focus,
        .form-group textarea:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px
            color-mix(in srgb, var(--primary-color) 20%, transparent);
          outline: none;
        }
        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .checkbox-group input[type="checkbox"] {
          width: auto;
          accent-color: var(--primary-color);
        }
        .editor-actions {
          margin-top: 1.5rem;
          margin-bottom: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }
        .schedule-group {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .schedule-input {
          padding: 0.55rem; /* Align with button height */
          border: 1px solid var(--border-color);
          border-radius: 6px;
        }
        .preview-section,
        .email-template-preview-placeholder {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px dashed var(--border-color);
        }
        .preview-section h3,
        .email-template-preview-placeholder h4 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        .preview-content {
          border: 1px solid var(--border-color);
          padding: 1rem;
          min-height: 100px;
          border-radius: 6px;
          background-color: color-mix(
            in srgb,
            var(--background-color) 50%,
            white
          );
        }
        /* Basic styling for preview content */
        .preview-content :global(h2) {
          font-size: 1.5em;
          margin-top: 0.8em;
        }
        .preview-content :global(h3) {
          font-size: 1.25em;
          margin-top: 0.7em;
        }
        .preview-content :global(strong) {
          font-weight: bold;
        }
        .preview-content :global(em) {
          font-style: italic;
        }
        .preview-content :global(a) {
          color: var(--secondary-color);
          text-decoration: underline;
        }
        .preview-content :global(blockquote) {
          border-left: 3px solid var(--accent-color);
          padding-left: 0.8em;
          margin-left: 0;
          font-style: italic;
        }

        .email-mockup {
          border: 1px solid var(--border-color);
          padding: 1rem;
          border-radius: 6px;
          background: #f9f9f9; /* Typical email client background */
          font-family: Arial, sans-serif; /* Typical email font */
          color: #333;
        }
        .email-mockup :global(h2),
        .email-mockup :global(h3) {
          color: var(--primary-color);
        }
      `}</style>
    </Card>
  );
};

const AdminAnalyticsPage: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Card>
      <Head>
        <title>Post Analytics - {SITE_NAME}</title>
      </Head>
      <h2>Post Analytics (Conceptual)</h2>
      <p>
        This section would display detailed analytics for your posts, including
        views, engagement, subscriber growth, etc. Integration with an analytics
        backend is required.
      </p>

      <div className="analytics-summary">
        <div className="summary-card">
          <h4>Total Posts</h4>
          <p>{posts.length}</p>
        </div>
        <div className="summary-card">
          <h4>Total Views (Mock)</h4>
          <p>
            {posts
              .reduce((sum, post) => sum + (post.views || 0), 0)
              .toLocaleString()}
          </p>
        </div>
        <div className="summary-card">
          <h4>Total Comments (Mock)</h4>
          <p>
            {posts
              .reduce((sum, post) => sum + (post.commentsCount || 0), 0)
              .toLocaleString()}
          </p>
        </div>
      </div>

      <h3>Post Performance</h3>
      <table className="analytics-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Views</th>
            <th>Comments</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.views?.toLocaleString() || "N/A"}</td>
              <td>{post.commentsCount?.toLocaleString() || "N/A"}</td>
              <td>{post.premium ? "Premium" : "Public"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Email List Management (Placeholder)</h3>
      <p>
        This area would allow you to manage your subscriber list, send
        broadcasts, and view email campaign performance. Requires backend
        integration for email services.
      </p>
      <Button onClick={() => alert("Manage subscribers (placeholder)")}>
        Manage Subscribers
      </Button>

      <style jsx>{`
        .analytics-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .summary-card {
          background-color: var(--background-color);
          padding: 1rem;
          border-radius: 6px;
          text-align: center;
          border: 1px solid var(--border-color);
        }
        .summary-card h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
        }
        .summary-card p {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--text-primary);
          margin: 0;
        }
        .analytics-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2rem;
        }
        .analytics-table th,
        .analytics-table td {
          border: 1px solid var(--border-color);
          padding: 0.75rem;
          text-align: left;
        }
        .analytics-table th {
          background-color: color-mix(
            in srgb,
            var(--primary-color) 10%,
            transparent
          );
          color: var(--primary-color);
        }
        h3 {
          margin-top: 2rem;
          color: var(--primary-color);
        }
      `}</style>
    </Card>
  );
};

// --- MAIN APP COMPONENT (Simulates routing) ---
type PageView =
  | "home"
  | "post"
  | "subscriptions"
  | "profile"
  | "editor"
  | "adminAnalytics";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>("home");
  const [currentPostSlug, setCurrentPostSlug] = useState<string | undefined>(
    undefined
  );
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [currentUser, setCurrentUser] = useState<User | null>(MOCK_USER); // Simulate logged-in user

  const handleNavigate = (view: PageView, params?: any) => {
    setCurrentView(view);
    if (view === "post" && params?.slug) {
      setCurrentPostSlug(params.slug);
    } else {
      setCurrentPostSlug(undefined);
    }
    window.scrollTo(0, 0); // Scroll to top on "page" change
  };

  const handlePublishPost = (newPostData: {
    title: string;
    content: string;
    isPremium: boolean;
  }) => {
    const newPost: Post = {
      id: String(posts.length + 1),
      slug: newPostData.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, ""),
      title: newPostData.title,
      author: currentUser?.name || "Anonymous Author",
      authorId: currentUser?.id || "anon",
      date: new Date().toISOString().split("T")[0],
      excerpt: newPostData.content.substring(0, 150) + "...",
      content: newPostData.content,
      tags: ["New"], // Add tag functionality later
      premium: newPostData.isPremium,
      views: 0,
      commentsCount: 0,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    alert(`Post "${newPost.title}" published successfully!`);
    handleNavigate("post", { slug: newPost.slug });
  };

  // Effect to update user if subscription changes (due to mock modification)
  // This is a simplified way to reflect changes in the MOCK_USER object.
  // In a real app, user state would be managed through context or a state management library.
  useEffect(() => {
    setCurrentUser({ ...MOCK_USER }); // Re-set to pick up any direct modifications to MOCK_USER
  }, [currentView]); // Re-check on view change, as subscription might change on PostPage/SubscriptionPage

  let pageComponent;
  switch (currentView) {
    case "post":
      pageComponent = (
        <PostPage
          slug={currentPostSlug}
          currentUser={currentUser}
          onNavigate={handleNavigate}
        />
      );
      break;
    case "subscriptions":
      pageComponent = (
        <SubscriptionPage
          currentUser={currentUser}
          onNavigate={handleNavigate}
        />
      );
      break;
    case "profile":
      if (currentUser) {
        pageComponent = (
          <ProfilePage
            user={currentUser}
            posts={posts}
            onNavigate={handleNavigate}
          />
        );
      } else {
        // Redirect to home or show login message if no user
        handleNavigate("home");
        pageComponent = <HomePage posts={posts} onNavigate={handleNavigate} />;
      }
      break;
    case "editor":
      if (currentUser) {
        pageComponent = <TextEditorComponent onPublish={handlePublishPost} />;
      } else {
        alert("Please login to create a post.");
        handleNavigate("home");
        pageComponent = <HomePage posts={posts} onNavigate={handleNavigate} />;
      }
      break;
    case "adminAnalytics":
      if (currentUser) {
        // Assuming only logged-in user (admin/author) can see this
        pageComponent = <AdminAnalyticsPage posts={posts} />;
      } else {
        alert("Please login to view analytics.");
        handleNavigate("home");
        pageComponent = <HomePage posts={posts} onNavigate={handleNavigate} />;
      }
      break;
    case "home":
    default:
      pageComponent = <HomePage posts={posts} onNavigate={handleNavigate} />;
  }

  return (
    <MainLayout onNavigate={handleNavigate} currentUser={currentUser}>
      {pageComponent}
      <GlobalStyles /> {/* Apply global styles */}
    </MainLayout>
  );
};

// --- GLOBAL STYLES ---
const GlobalStyles = () => (
  <style jsx global>{`
    :root {
      --primary-color: ${COOL_REVIVAL_PALETTE.primary};
      --secondary-color: ${COOL_REVIVAL_PALETTE.secondary};
      --accent-color: ${COOL_REVIVAL_PALETTE.accent};
      --background-color: ${COOL_REVIVAL_PALETTE.background};
      --surface-color: ${COOL_REVIVAL_PALETTE.surface};
      --text-primary: ${COOL_REVIVAL_PALETTE.textPrimary};
      --text-secondary: ${COOL_REVIVAL_PALETTE.textSecondary};
      --border-color: ${COOL_REVIVAL_PALETTE.border};
      --success-color: ${COOL_REVIVAL_PALETTE.success};
      --error-color: ${COOL_REVIVAL_PALETTE.error};
      --semi-flat-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
      --semi-flat-shadow-hover: 0 4px 10px rgba(0, 0, 0, 0.12);
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-color: var(--background-color);
      color: var(--text-primary);
      line-height: 1.6;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: var(--secondary-color);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--primary-color);
      font-weight: 600;
    }

    /* Basic responsive typography could be added here */
    /* @media (max-width: 768px) { html { font-size: 90%; } } */
  `}</style>
);

export default App;
