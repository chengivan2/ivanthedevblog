import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogAuthor } from "@/components/blog/blog-author"
import { BlogComments } from "@/components/blog/blog-comments"
import { BlogRelated } from "@/components/blog/blog-related"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Copy, Bookmark, ThumbsUp } from "lucide-react"

// This would normally come from a database or CMS
const post = {
  title: "Advanced TypeScript Patterns for Better Code",
  excerpt:
    "Discover advanced TypeScript patterns that will help you write more maintainable and type-safe code. From mapped types to conditional types, we cover it all.",
  image: "/placeholder.svg?height=600&width=1200",
  date: "May 10, 2025",
  category: "TypeScript",
  readTime: "12 min read",
  author: {
    name: "David Chen",
    role: "TypeScript Specialist",
    image: "/placeholder.svg?height=100&width=100",
    bio: "David is a TypeScript specialist with over 6 years of experience building enterprise applications. He's passionate about type safety and code quality.",
  },
  tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
}

export default function TypeScriptPatterns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-green-950 dark:via-gray-900 dark:to-yellow-950">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <article className="py-12">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link
                      href="/blog"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Blog
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{post.title}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Featured Image */}
          <div className="relative h-[40vh] md:h-[50vh] w-full mb-8 overflow-hidden rounded-2xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 md:p-10 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                  <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    {post.readTime}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <p className="text-lg text-white/90 max-w-3xl">{post.excerpt}</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar with table of contents and sharing */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Table of Contents */}
                <div className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Table of Contents</h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#introduction"
                      className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Introduction
                    </a>
                    <a
                      href="#utility-types"
                      className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Utility Types
                    </a>
                    <a
                      href="#mapped-types"
                      className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Mapped Types
                    </a>
                    <a
                      href="#conditional-types"
                      className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Conditional Types
                    </a>
                    <a
                      href="#template-literal-types"
                      className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Template Literal Types
                    </a>
                    <a
                      href="#type-guards"
                      className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Type Guards
                    </a>
                    <a
                      href="#conclusion"
                      className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      Conclusion
                    </a>
                  </nav>
                </div>

                {/* Share */}
                <div className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Share</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="icon" className="rounded-full bg-white/70 dark:bg-gray-800/70">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/70 dark:bg-gray-800/70">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/70 dark:bg-gray-800/70">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/70 dark:bg-gray-800/70">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy link</span>
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag.toLowerCase()}`}
                        className="inline-block rounded-full bg-white/50 dark:bg-gray-800/50 px-3 py-1 text-sm hover:bg-green-100 dark:hover:bg-green-900/30"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="rounded-xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 p-6 md:p-10 shadow-lg bg-gradient-to-bl from-green-100/30 to-yellow-100/30 dark:from-green-900/30 dark:to-yellow-900/30">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-yellow-600 dark:text-yellow-400">{post.date}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400">
                      <Bookmark className="mr-1 h-4 w-4" />
                      <span className="hidden sm:inline">Save</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      <span className="hidden sm:inline">Like</span>
                    </Button>
                  </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-green-800 dark:prose-headings:text-green-300 prose-a:text-yellow-600 dark:prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
                  <h2 id="introduction">Introduction</h2>
                  <p>
                    TypeScript has become an essential tool for JavaScript developers, providing static type checking
                    and enhancing code quality. While many developers are familiar with basic TypeScript features, there
                    are advanced patterns that can significantly improve your code's maintainability, readability, and
                    type safety.
                  </p>
                  <p>
                    In this article, we'll explore advanced TypeScript patterns that go beyond the basics. These
                    patterns will help you leverage TypeScript's powerful type system to write more robust and
                    maintainable code.
                  </p>

                  <h2 id="utility-types">Utility Types</h2>
                  <p>
                    TypeScript provides several built-in utility types that can help you transform and manipulate types.
                    Let's explore some of the most useful ones:
                  </p>

                  <h3>Partial&lt;T&gt;</h3>
                  <p>Makes all properties in a type optional:</p>
                  <pre>
                    <code>{`
interface User {
  id: number;
  name: string;
  email: string;
}

// All properties are optional
type PartialUser = Partial<User>;

// Valid: missing properties are optional
const user: PartialUser = { 
  name: "John" 
};
                  `}</code>
                  </pre>

                  <h3>Required&lt;T&gt;</h3>
                  <p>Makes all properties in a type required:</p>
                  <pre>
                    <code>{`
interface Config {
  cache?: boolean;
  timeout?: number;
  retries?: number;
}

// All properties are required
type RequiredConfig = Required<Config>;

// Error: missing properties
const config: RequiredConfig = { 
  cache: true 
};
                  `}</code>
                  </pre>

                  <h3>Pick&lt;T, K&gt;</h3>
                  <p>Creates a type by picking a set of properties from another type:</p>
                  <pre>
                    <code>{`
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Only includes name and email
type UserProfile = Pick<User, "name" | "email">;

const profile: UserProfile = {
  name: "John",
  email: "john@example.com"
};
                  `}</code>
                  </pre>

                  <h3>Omit&lt;T, K&gt;</h3>
                  <p>Creates a type by omitting a set of properties from another type:</p>
                  <pre>
                    <code>{`
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Excludes password
type SafeUser = Omit<User, "password">;

const user: SafeUser = {
  id: 1,
  name: "John",
  email: "john@example.com"
};
                  `}</code>
                  </pre>

                  <h2 id="mapped-types">Mapped Types</h2>
                  <p>
                    Mapped types allow you to create new types based on existing ones by transforming properties.
                    They're similar to how you might use
                    <code>map()</code> on an array, but for types.
                  </p>

                  <h3>Basic Mapped Type</h3>
                  <pre>
                    <code>{`
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: "John"
};

// Error: Cannot assign to 'name' because it is a read-only property
user.name = "Jane";
                  `}</code>
                  </pre>

                  <h3>Creating a Nullable Type</h3>
                  <pre>
                    <code>{`
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

interface User {
  id: number;
  name: string;
  email: string;
}

type NullableUser = Nullable<User>;

const user: NullableUser = {
  id: 1,
  name: null,  // Valid
  email: "john@example.com"
};
                  `}</code>
                  </pre>

                  <h3>Modifying Property Modifiers</h3>
                  <pre>
                    <code>{`
// Remove readonly modifier
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// Make all properties optional
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Make all optional properties required
type Required<T> = {
  [P in keyof T]-?: T[P];
};
                  `}</code>
                  </pre>

                  <h2 id="conditional-types">Conditional Types</h2>
                  <p>
                    Conditional types allow you to create types that depend on conditions, similar to ternary operators
                    in JavaScript.
                  </p>

                  <h3>Basic Conditional Type</h3>
                  <pre>
                    <code>{`
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
type C = IsString<"hello">;  // true
                  `}</code>
                  </pre>

                  <h3>Extracting Types</h3>
                  <pre>
                    <code>{`
type ExtractArrayType<T> = T extends Array<infer U> ? U : never;

type A = ExtractArrayType<string[]>;  // string
type B = ExtractArrayType<number[]>;  // number
type C = ExtractArrayType<string>;    // never
                  `}</code>
                  </pre>

                  <h3>Distributive Conditional Types</h3>
                  <pre>
                    <code>{`
type ToArray<T> = T extends any ? T[] : never;

type A = ToArray<string | number>;  // string[] | number[]
                  `}</code>
                  </pre>

                  <h2 id="template-literal-types">Template Literal Types</h2>
                  <p>
                    Template literal types, introduced in TypeScript 4.1, allow you to manipulate string types using
                    template literal syntax.
                  </p>

                  <h3>Basic Template Literal Type</h3>
                  <pre>
                    <code>{`
type Greeting = \`Hello, \${string}\`;

const a: Greeting = "Hello, World";  // Valid
const b: Greeting = "Hello, TypeScript";  // Valid
const c: Greeting = "Hi, World";  // Error
                  `}</code>
                  </pre>

                  <h3>Combining with Unions</h3>
                  <pre>
                    <code>{`
type Direction = "top" | "right" | "bottom" | "left";
type Margin = \`margin-\${Direction}\`;

// Type is: "margin-top" | "margin-right" | "margin-bottom" | "margin-left"
const margin: Margin = "margin-top";  // Valid
                  `}</code>
                  </pre>

                  <h3>Creating Event Handler Types</h3>
                  <pre>
                    <code>{`
type EventName = "click" | "focus" | "blur";
type EventHandler = \`on\${Capitalize<EventName>}\`;

// Type is: "onClick" | "onFocus" | "onBlur"
const handler: EventHandler = "onClick";  // Valid
                  `}</code>
                  </pre>

                  <h2 id="type-guards">Type Guards</h2>
                  <p>Type guards allow you to narrow down the type of a variable within a conditional block.</p>

                  <h3>Using typeof</h3>
                  <pre>
                    <code>{`
function process(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is a string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is a number here
    return value.toFixed(2);
  }
}
                  `}</code>
                  </pre>

                  <h3>Using instanceof</h3>
                  <pre>
                    <code>{`
class Dog {
  bark() { return "Woof!"; }
}

class Cat {
  meow() { return "Meow!"; }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    // TypeScript knows animal is a Dog here
    return animal.bark();
  } else {
    // TypeScript knows animal is a Cat here
    return animal.meow();
  }
}
                  `}</code>
                  </pre>

                  <h3>Custom Type Guards</h3>
                  <pre>
                    <code>{`
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

// Type predicate
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    // TypeScript knows pet is a Fish here
    pet.swim();
  } else {
    // TypeScript knows pet is a Bird here
    pet.fly();
  }
}
                  `}</code>
                  </pre>

                  <h2 id="conclusion">Conclusion</h2>
                  <p>
                    These advanced TypeScript patterns can significantly improve your code's type safety, readability,
                    and maintainability. By leveraging utility types, mapped types, conditional types, template literal
                    types, and type guards, you can create more robust and flexible type definitions.
                  </p>
                  <p>
                    Remember that TypeScript's type system is designed to help you catch errors at compile time rather
                    than runtime. By using these advanced patterns, you're essentially encoding more of your program's
                    logic into the type system, allowing TypeScript to catch more potential issues before they become
                    runtime bugs.
                  </p>
                  <p>
                    As you become more comfortable with these patterns, you'll find yourself writing more expressive and
                    safer TypeScript code.
                  </p>
                </div>
              </div>

              {/* Author bio */}
              <BlogAuthor author={post.author} />

              {/* Comments */}
              <BlogComments />

              {/* Related posts */}
              <BlogRelated />
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
