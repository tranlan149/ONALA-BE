import { EDecoratorKeyConvert } from '../../constant/decorator.constants';

import { IAutoConvertDefaultValue } from './../interfaces/decorator.interface';

function autoConvertDecoratorHandle(
  target: Object,
  propertyKey: string,
  key: EDecoratorKeyConvert,
) {
  const meta = Reflect.getMetadata(key, target) as string[];
  if (!meta) {
    return Reflect.defineMetadata(key, [propertyKey], target);
  }
  if (!meta.includes(propertyKey)) {
    meta.push(propertyKey);
  }
}

export function AutoConvertNumber(_target: Object) {
  return function (target: any, propertyKey: string) {
    autoConvertDecoratorHandle(
      _target,
      propertyKey,
      EDecoratorKeyConvert.NUMBER,
    );
  };
}

export function AutoConvertBoolean(_target: Object) {
  return function (target: any, propertyKey: string) {
    autoConvertDecoratorHandle(
      _target,
      propertyKey,
      EDecoratorKeyConvert.BOOLEAN,
    );
  };
}

export function AutoConvertArrayNumber(_target: Object) {
  return function (target: any, propertyKey: string) {
    autoConvertDecoratorHandle(
      _target,
      propertyKey,
      EDecoratorKeyConvert.ARRAY_NUMBER,
    );
  };
}

export function AutoConvertArrayString(_target: Object) {
  return function (target: any, propertyKey: string) {
    autoConvertDecoratorHandle(
      _target,
      propertyKey,
      EDecoratorKeyConvert.ARRAY_STRING,
    );
  };
}

export function DefaultValue(_target: Object, defaultValue: any) {
  return function (target: any, propertyKey: string) {
    const meta = Reflect.getMetadata(
      EDecoratorKeyConvert.DEFAULT_VALUE,
      _target,
    ) as IAutoConvertDefaultValue[];
    if (!meta) {
      return Reflect.defineMetadata(
        EDecoratorKeyConvert.DEFAULT_VALUE,
        [
          {
            key: propertyKey,
            defaultValue: defaultValue,
          } as IAutoConvertDefaultValue,
        ],
        _target,
      );
    }
    if (!meta.some(data => data.key === propertyKey)) {
      meta.push({
        key: propertyKey,
        defaultValue: defaultValue,
      } as IAutoConvertDefaultValue);
    }
  };
}
