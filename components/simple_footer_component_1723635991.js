/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723635991", {
    template: `
    <div class="flex flex-col h-screen">
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <a href="#" class="text-white text-2xl font-bold">BlockExplore</a>
                <div>
                    <a href="#" class="text-white mx-4 hover:text-gray-300">Home</a>
                    <a href="#" class="text-white mx-4 hover:text-gray-300">About</a>
                    <a href="#" class="text-white mx-4 hover:text-gray-300">Contact</a>
                </div>
            </div>
        </nav>
        <div class="flex-1">
            <footer id="footer-section" class="bg-white dark:bg-gray-800">
                <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                    <div id="footer-content" class="text-center">
                        <div class="flex">
                            <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                                BlockExplore - Discover Blockchain Insights
                            </a>
                        </div>
                    </div>
                    <div class="flex">
                        <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                            Stay ahead of the curve with BlockExplore. Our platform provides real-time updates on the latest blockchain developments, projects, and trends. Explore the decentralized future today.
                            Stay ahead of the curve with BlockExplore. Our platform provides real-time updates on the latest blockchain developments, projects, and trends. Explore the decentralized future today.
                            <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Hello World
                            </button>
                        </div>
                    </div>
                </div>
            </footer> 
        </div>
    </div>
    `,
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
