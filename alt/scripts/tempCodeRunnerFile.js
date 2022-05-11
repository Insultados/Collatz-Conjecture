                tmp = shortMultiplication(a, b[i]);
                d.set(b[i], tmp);
                for (w = 0; w < add_zeros; w += 1) {
                    tmp.push(0);
                }
                result = longSum(tmp, result);