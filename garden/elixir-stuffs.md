---
title: Phoenix/Elixir stuffs
url: "elixir-stuffs"
---

# Phoenix/Elixir stuffs

## Test only
If you want to run only one or few test cases we can "tag" each of them and will execute only the tagged ones. Using the following command:
```bash
$ mix test --only only
```
where `only` is a the tag name, will execute every test that has:
```elixir
@tag :only
```
before the start of the test.

* [https://stackoverflow.com/questions/21878409/in-elixirs-exunit-is-it-possible-to-just-run-one-test](https://stackoverflow.com/questions/21878409/in-elixirs-exunit-is-it-possible-to-just-run-one-test)

## Mix alias
I'm fluent in JavaScript and my main tool is npm, so mix is basically the npm for elixir. So in JavaScript I'm used to run custom scripts with npm like this:
```bash
$ npm run test-w
```
We can do the same in elixir/phoenix using mix, in the `mix.exs` file we can define project aliases:
```elixir
def project do
  [
    aliases: aliases()
  ]
end

defp aliases do
  [
    test_only: ["cmd mix test --only only"]
  ]
end
```
You can concat the commands you want in the array of the right side (`["cmd mix test --only only"]`) next to the name of the alias (`test_only`). One important thing here is that if you want to run command with mix first you need to include the `cmd` word. 

* [https://elixirschool.com/blog/til-umbrella-app-child-app-tests/](https://elixirschool.com/blog/til-umbrella-app-child-app-tests/)
* [https://hexdocs.pm/mix/1.12/Mix.html](https://hexdocs.pm/mix/1.12/Mix.html)

## VSCode ElixirLS config formatter
If you're using vscode when coding elixir and you want to get the most value from your editor, first thing to install is the extension called "ElixirLS". If you have a formatter setup for your project best thing to do is configure that you code will be format every time your file is saved in your vscode settings.json file:
```json
{
  // only for elixir code
  "[elixir]": {
      "editor.defaultFormatter": "JakeBecker.elixir-ls",
      "editor.formatOnSave": true
    }
}
```

* [https://github.com/elixir-lsp/elixir-ls](https://github.com/elixir-lsp/elixir-ls)

## Migrations
* [Add new column](https://stackoverflow.com/questions/48494655/how-to-add-field-in-existing-table-phoenix)
* [Cheatsheet](https://devhints.io/phoenix-migrations)
