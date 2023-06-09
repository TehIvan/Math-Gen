import {randint, randomchoice, calculate_gcd} from '../utils.js';

export function absolute_difference(max_a=100, max_b=100) {
    const a = randint(-1 * max_a, max_a);
    const b = randint(-1 * max_b, max_b);
    const absDiff = Math.abs(a - b);
    return [`${a}-${b}`, `${absDiff}`];
}

export function addition(max_sum=99, max_addend=50) {
    if (max_addend > max_sum) max_addend = max_sum;
    const a = randint(0, max_addend);
    const b = randint(0, max_addend);
    const c = a + b;
    const problem = `${a}+${b}=`;
    const solution = `${c}`;

    return [problem, solution]
}

export function compare_fractions(max_val=10) {
    const a = randint(1, max_val);
    let b = randint(1, max_val);
    const c = randint(1, max_val);
    let d = randint(1, max_val);

    while (a == b) b = randint(1, max_val);
    while (c == d) d = randint(1, max_val);

    const first = a / b;
    const second = c / d;

    let solution;
    if (first > second) {
        solution = '>';
    } else if (first < second) {
        solution = '<';
    } else {
        solution = '=';
    }

    const problem = `Which symbol represents the comparison between ${a}/${b} and ${c}/${d}?`;
    return [problem, solution];
}

export function cube_root(min_no=1, max_no=1000) {
    const a = randint(min_no, max_no);
    const b = a ** (1 / 3);

    return [`What is the cube root of ${a}?`, `$${b}$`];
}

export function divide_fractions(max_val=10) {
    const a = randint(1, max_val);
    let b = randint(1, max_val);
    while (a == b) b = randint(1, max_val);

    const c = randint(1, max_val);
    let d = randint(1, max_val);
    while (c == d) d = randint(1, max_val);

    const tmp_n = a * d;
    const tmp_d = b * c;
    
    const gcd = calculate_gcd(tmp_n, tmp_d);
    const sol_numerator = Math.floor(tmp_n / gcd);
    const sol_denominator = Math.floor(tmp_d / gcd);

    return [`What is ${a}/${b} by ${c}/${d}?`, `${sol_numerator}/${sol_denominator}`];
}

export function division(max_a=25, max_b=25) {
    let a = randint(1, max_a);
    let b = randint(1, max_b);

    const divisor = a * b;
    const dividend = randomchoice(a, b);
    const quotient = Math.floor(divisor / dividend);

    return [`${divisor}/${dividend}`, `${quotient}`];
}

export function exponentiation(max_base=10, max_expo=10) {
    const base = randint(1, max_base);
    const expo = randint(1, max_expo);
    const sol = Math.pow(base, expo);
   
    return [`${base}^${expo}=?`, `${sol}`];
}

export function factorial(max_input=10) {
    const a = randint(0, max_input);
    let n = a;
    let b = 1;
    while (a != 1 && n > 0) {
        b *= n;
        n -= 1;
    }

    return [`Facorial of ${a}`, `${b}`];
}

export function fraction_multiplication(max_val=10) {
    const a = randint(1, max_val);
    let b = randint(1, max_val);
    const c = randint(1, max_val);
    let d = randint(1, max_val);

    while (a == b) b = randint(1, max_val);
    while (c == d) d = randint(1, max_val);

    const tmp_n = a * c;
    const tmp_d = b * d;

    const gcd = calculate_gcd(tmp_n, tmp_d);

    const problem = `${a}/${b} * ${c}/${d}`;
    const solution = (tmp_d == 1 || tmp_d == gcd) ? 
        `${tmp_n}/${gcd}` : 
        `${Math.floor(tmp_n / gcd)}/${Math.floor(tmp_d / gcd)}`;
    return [problem, solution];
}

export function fraction_to_decimal(max_res=99, max_divid=99) {
    const a = randint(1, max_res);
    const b = randint(1, Math.min(max_res, max_divid));
    const c = Math.round(a / b, 2);

    return [`${a}/${b}=?`, `${c}`];
}

export function greatest_common_divisor(numbers_count=2, max_num=10**3) {
    numbers_count = Math.max(numbers_count, 2);
    let numbers = [];
    for (let i = 0; i < numbers_count; i++) {
        numbers.push(randint(0, max_num));
    }
    let greatest_common_divisor = calculate_gcd(numbers[0], numbers[1]);
    for (let i = 0; i < numbers_count; i++) {
        greatest_common_divisor = calculate_gcd(greatest_common_divisor, numbers[i]);
    }
    return [`Greatest Common Divisor of ${numbers.join(', ')} is`, `${greatest_common_divisor}`];
}

export function is_composite(max_num=250) {
    const a = randint(2, max_num);
    const problem = `Is ${a} composite?`;
    if (a == 0 || a == 1) return [problem, 'No'];
    for (let i = 2; i < a; i++) {
        if (a % i == 0) return [problem, 'Yes'];
    }
    const solution = 'No';

    return [problem, solution];
}

export function is_prime(max_num=100) {
    const a = randint(2, max_num);
    const problem = `Is ${a} prime?`;
    if (a == 2) return [problem, 'Yes'];
    if (a % 2 == 0) return [problem, 'No'];
    for (let i = 3; i < Math.floor(a / 2) + 1; i += 2) {
        if (a % i == 0) return [problem, 'No'];
    }
    const solution = 'Yes';

    return [problem, solution];
}

export function multiplication(max_multi=12) {
    const a = randint(0, max_multi);
    const b = randint(0, max_multi);
    const c = a * b;

    return [`${a}*${b}=`, `${c}`];
}

export function percentage_difference(max_value=200, min_value=0) {
    const value_a = randint(min_value, max_value);
    const value_b = randint(min_value, max_value);
    let difference = Math.round(2 * (Math.abs(value_a - value_b) / Math.abs(value_a + value_b)) * 100);

    return [`What is the percentage difference between ${value_a} and ${value_b}?`, `${difference}%`];
}

export function percentage_error(max_value=100, min_value=-100) {
    let observed_value = randint(min_value, max_value);
    const exact_value = randint(min_value, max_value);

    if (observed_value * exact_value < 0) observed_value = -observed_value;

    const error = Math.round(Math.abs(observed_value - exact_value) / Math.abs(exact_value) * 100, 2);

    return [`Find the percentage error when observed value equals ${observed_value} and exact value equals ${exact_value}.`, `${error}%`];
}

export function square_root(min_no=1, max_no=12) {
    const b = randint(min_no, max_no);
    const a = b * b;

    return [`Square Root of ${a} = ?`, `${b}`];
}

export function simplify_square_root(max_variable=100) {
    const y = randint(1, max_variable);
    let x = y;
    let factors = {};
    let f = 2;
    while (x != 1) {
        if (x % f == 0) {
            if (!factors.includes(f)) factors[f] = 0;
            factors[f]++;
            x /= f;
        } else {
            f++;
        }
    }
    let a = 1;
    let b = 1;
    for (let i = 0; i < factors.length; i++) {
        if (factors[i] & 1 == 0) {
            a *= i * Math.floor(factors[i], 2);
        } else {
            a *= Math.pow(i, Math.floor(factors[i] - 1, 2));
            b *= i;
        }
    }
    if (a == 1 || b == 1) return simplify_square_root(max_variable);
    return [`Square Root of ${y} = ?`, `The ${a} root of ${b}`];
}

export function subtraction(max_minuend=99, max_diff=99) {
    const a = randint(0, max_minuend);
    const b = randint(Math.max(0, a - max_diff), a);
    const c = a - b;

    return [`${a}-${b}=`, `${c}`];
}
