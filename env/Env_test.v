// tests/env/env_test.v
import test { expect }
import env { Env }

fn test_can_load_env_file() {
    mut environment := Env{
        file: $embed_file("../tests/misc/.env")
    }

    name := environment.get('APP_NAME') or { "" }

    expect(name).to_be_equal_to('Mantis')
}

fn test_can_use_cached_values() {
    mut environment := Env{
        file: $embed_file("../tests/misc/.env")
    }

    // First access parses
    first := environment.get('APP_NAME') ?
    // Second should use cache
    second := environment.get('APP_NAME') ?

    expect(first).to_be_equal_to(second)
}

fn test_handles_missing_values() {
    mut environment := Env{
        file: $embed_file("../tests/misc/.env")
    }

    value := environment.get('DOES_NOT_EXIST') or {
        'default'
    }

    expect(value).to_be_equal_to('default')
}

fn test_ignores_comments() {
    mut environment := Env{
        file: $embed_file("../tests/misc/.env")
    }

    after_comment := environment.get('AFTER_COMMENT') or { "" }

    expect(after_comment).to_be_equal_to('value')
}
