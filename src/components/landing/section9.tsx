import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
 
export const CTASimpleCenteredLast = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-md">See Unique Leverage in Action</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Discover how automation can transform your marketing strategy. Get setup in 10 minutes or less.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-col md:self-center">
                        {/* <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            wrapperClassName="py-0.5"
                            placeholder="Enter your email"
                        /> */}
                        <Button size="xl">Book a demo</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
 

