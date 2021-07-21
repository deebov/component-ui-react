import { AtlasSelect } from ".";
import { fireEvent, getByRole, press, render, screen } from "../test-utils/test-utils";

describe("Select", () => {
    test("renders without errors", () => {
        render(
            <AtlasSelect
                aria-label="Select"
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );
    });

    test("trigger has proper aria attributes", () => {
        render(
            <AtlasSelect
                aria-label="Select"
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        expect(screen.getByRole("button")).toHaveAttribute("aria-haspopup", "listbox");
        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
    });

    test("trigger has proper aria attributes when open", () => {
        render(
            <AtlasSelect
                aria-label="Select"
                defaultOpen
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        expect(screen.getByRole("button")).toHaveAttribute("aria-haspopup", "listbox");
        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
    });

    test("listbox shows up when trigger pressed and hides again", async () => {
        render(
            <AtlasSelect
                aria-label="Select"
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");

        fireEvent.click(screen.getByRole("button"));

        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("listbox")).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button"));

        screen.queryByRole("listbox");
        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    test("listbox shows up when Enter pressed on trigger", async () => {
        render(
            <AtlasSelect
                aria-label="Select"
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");

        press.Enter(screen.getByRole("button"));

        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    test("listbox shows up when Space pressed on trigger", async () => {
        render(
            <AtlasSelect
                aria-label="Select"
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");

        press.Space(screen.getByRole("button"));

        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    test("listbox hides when Escape pressed", async () => {
        render(
            <AtlasSelect
                aria-label="Select"
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        fireEvent.click(screen.getByRole("button"));

        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
        expect(screen.getByRole("listbox")).toBeInTheDocument();

        press.Escape(screen.getByRole("listbox"));

        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    test("select an option with Enter hides listbox", async () => {
        render(
            <AtlasSelect
                aria-label="Select"
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        press.Space(screen.getByRole("button"));
        fireEvent.keyDown(screen.getByRole("listbox"), { key: "ArrowDown" });
        // Select the focused option
        fireEvent.keyDown(screen.getByText(/kangaroo/i), { key: "Enter" });

        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
        expect(screen.getByRole("button")).toHaveTextContent("Kangaroo");

        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    test("select an option with click hides listbox", async () => {
        render(
            <AtlasSelect
                aria-label="Select"
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        press.Space(screen.getByRole("button"));
        fireEvent.keyDown(screen.getByRole("listbox"), { key: "ArrowDown" });
        // Select the first focusable option
        fireEvent.click(screen.getByText(/kangaroo/i), { key: "Enter" });

        expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
        expect(screen.getByRole("button")).toHaveTextContent("Kangaroo");

        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    test("ignores interaction events when isDisabled=true", async () => {
        render(
            <AtlasSelect
                aria-label="Select"
                isDisabled
                options={[
                    { label: "Aardvark", value: "Aardcark" },
                    { label: "Kangaroo", value: "Kangaroo" },
                    { label: "Snake", value: "Snake" },
                ]}
            />
        );

        fireEvent.click(screen.getByRole("button"));
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
        press.Space(screen.getByRole("button"));
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
        press.Enter(screen.getByRole("button"));
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
    });

    test("renders sections", async () => {
        render(
            <AtlasSelect
                aria-label="Select"
                defaultOpen
                options={[
                    {
                        label: "animals",
                        options: [
                            { value: 1, label: "Aardvark" },
                            { value: 2, label: "Cat" },
                            { value: 3, label: "Dog" },
                            { value: 4, label: "Kangaroo" },
                            { value: 5, label: "Koala" },
                        ],
                    },
                    {
                        label: "people",
                        options: [
                            { value: 6, label: "Penguin" },
                            { value: 7, label: "Snake" },
                            { value: 8, label: "Turtle" },
                            { value: 9, label: "Wombat" },
                        ],
                    },
                ]}
            />
        );

        const listbox = screen.getByRole("listbox");
        // Section heading
        // expect(getAllByRole(listbox, "presentation")[0]).toHaveTextContent(/animals/i);
        // expect(getAllByRole(listbox, "presentation")[1]).toHaveTextContent(/people/i);
        // Section options
        expect(getByRole(listbox, "group", { name: /animals/i })).toBeInTheDocument();
        expect(getByRole(listbox, "group", { name: /people/i })).toBeInTheDocument();
    });

    //   test("shows listbox even if there's no options", async () => {
    //     // @ts-ignore
    //     render(<AtlasSelect label="Select" />);

    //     fireEvent.click(screen.getByRole("button"));
    //     expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
    //     expect(screen.getByRole("listbox")).toBeInTheDocument();
    //   });

    //   test("shows fallback when there's no options to show", async () => {
    //     // @ts-ignore
    //     render(<AtlasSelect label="Select" renderEmptyState={() => <span>No results</span>} />);

    //     fireEvent.click(screen.getByRole("button"));
    //     expect(screen.getByRole("listbox")).toHaveTextContent(/no results/i);
    //   });
});
