# Validation

Mantis provides a validation system that helps ensure your data meets specific criteria.

## Basic Usage

Here's a simple example validating user input:

```v
module main

import khalyomede.mantis.validation { validate, Rule, Value, Min }

fn main() {
  data := {
    "age": Value(21)
  }

  rules := {
    "age": [
      Rule(Min{18})
    ]
  }

  validate(data, rules) or {
    // err is a ValidationError
    eprintln(err.msg())

    exit(1)
  }

  println("The age is correct.")
}
```

## Custom rules

You can create your own rules.

They must implement two method: `validate(Value) bool` and `message(string) string`.

```v
module main

import khalyomede.mantis.validation { Rule, Value, validate }

// Custom email validation rule
struct Email {}

fn (rule Email) validate(value Value) bool {
    return match value {
        string {
            // Simple email check for demonstration
            value.contains('@') && value.contains('.')
        }
        else { false }
    }
}

fn (rule Email) message(key string) string {
    return "The ${key} must be a valid email address."
}

fn main() {
  email := "john.doe@company.com"

  data := {
    "email": Value(email)
  }

  rules := {
    "email": [
      Rule(Email{})
    ]
  }

  validate(data, rules) or {
    eprintln(err.msg())

    exit(1)
  }

  println("The email is correct.")
}
```

## Combining multiple rules

You can chain multiple rules for a field. The catched error will correspond to the first rule that did not pass.

```v
import mantis.validation { validate, Rule, Value, Min, Max }

fn main() {
  post := {
    "title": [
      Rule(Min{5})
      Rule(Max{100})
    ]
  }

  validate(post, rules) or {
    eprintln(err.msg())

    exit(1)
  }

  println("The post data are correct.")
}
```

## HTTP Form validation example

```v
import mantis.http { create_app, App, Response }
import mantis.http.route
import mantis.http.response
import mantis.validation { validate, Rule, Value, Min, Max }

// Custom validation rule for passwords
struct StrongPassword {}

// 8 characters, with lower and uppercase
fn (rule StrongPassword) validate(value Value) bool {
  return match value {
    string {
      value.len >= 8 &&
      value.to_lower() != value &&
      value.to_upper() != value
    }
    else { false }
  }
}

fn (rule StrongPassword) message(key string) string {
  return "The ${key} must be at least 8 characters and contain both uppercase and lowercase letters."
}

app := create_app(
  routes: [
    route.post(
      name: "register"
      path: "/register"
      callback: fn (app App) Response {
        // Get form data
        email := app.request.form("email") or { "" }
        password := app.request.form("password") or { "" }

        // Define validation rules
        rules := {
          "password": [
            Rule(StrongPassword{})
          ]
        }

        input := {
          "email": Value(email)
          "password": Value(password)
        }

        // Validate input
        validate(input, rules) or {
          return response.html(
            content: "Validation failed: ${err.msg()}"
            status: .bad_request
          )
        }

        // If we reach here, validation passed
        return response.html(
          content: "Registration successful!"
          status: .created
        )
      }
    )
  ]
)
```

## Built-in Rules

- [Min](#min)
- [Max](#max)

### Min

Ensures the value has a minimum value.

```v
module main

import khalyomede.mantis.validation { validate, Rule, Value, Min }

fn main() {
  validate({
    "age": Value(21)
  }, {
    "age": [
      Rule(Min{18})
    ]
  }) or {
    eprintln(err.msg())

    exit(1)
  }

  println("Age is correct.")
}
```

### Max

Ensures the value does not pass over the given value.

```v
module main

import khalyomede.mantis.validation { validate, Rule, Value, Max }

fn main() {
  validate({
    "age": Value(31)
  }, {
    "age": [
      Rule(Max{100})
    ]
  }) or {
    eprintln(err.msg())
  }

  println("The age is correct.")
}
```