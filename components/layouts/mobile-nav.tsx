import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
    return (
        <section className="lg:hidden">
            <Sheet>
                <SheetTrigger>
                    <button className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0  ">
                        <svg
                            className="h-6 w-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                            />
                        </svg>
                    </button>
                </SheetTrigger>

                <SheetContent>
                    <nav className="mt-6">
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="block p-3 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    Product
                                </a>
                            </li>
                            <li></li>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </section>
    );
}
