import * as yup from "yup";
import { Rule } from "effector-forms";

export function createRule<V, T = any>({ schema, name }: { schema: yup.Schema<T>; name: string }): Rule<V> {
  return {
    name,
    validator: (v: V) => {
      try {
        schema.validateSync(v);
        return {
          isValid: true,
          value: v,
        };
      } catch (err) {
        return {
          isValid: false,
          value: v,
          errorText: (err as Error).message,
        };
      }
    },
  };
}
