import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

import { EDecoratorKeyConvert } from '../../constant/decorator.constants';

import { IAutoConvertDefaultValue } from './../interfaces/decorator.interface';

@Injectable()
export class ConvertHttpQueryPipe implements PipeTransform<any> {
  private _convertNumber: string[];
  private _convertBoolean: string[];
  private _convertArrayNumber: string[];
  private _convertArrayString: string[];
  private _convertDefaultValue: IAutoConvertDefaultValue[];

  constructor(targetDto: Object) {
    this._convertNumber = Reflect.getMetadata(
      EDecoratorKeyConvert.NUMBER,
      targetDto,
    );
    this._convertBoolean = Reflect.getMetadata(
      EDecoratorKeyConvert.BOOLEAN,
      targetDto,
    );
    this._convertArrayNumber = Reflect.getMetadata(
      EDecoratorKeyConvert.ARRAY_NUMBER,
      targetDto,
    );
    this._convertArrayString = Reflect.getMetadata(
      EDecoratorKeyConvert.ARRAY_STRING,
      targetDto,
    );
    this._convertDefaultValue = Reflect.getMetadata(
      EDecoratorKeyConvert.DEFAULT_VALUE,
      targetDto,
    );
  }

  async transform(value: any, { type }: ArgumentMetadata) {
    if (type === 'body') {
      return value;
    }

    // convert
    convertToNumber(this._convertNumber, value);
    convertToBoolean(this._convertBoolean, value);
    convertToArrayNumber(this._convertArrayNumber, value);
    convertToArrayString(this._convertArrayString, value);
    applyDefaultValue(this._convertDefaultValue, value);

    return value;
  }
}

function convertToNumber(listRequireData: string[], value: Object) {
  if (!listRequireData || !listRequireData.length) {
    return;
  }
  for (const key of listRequireData) {
    if (value[key] !== undefined) {
      value[key] = +value[key];
    }
  }
}

function convertToBoolean(listRequireData: string[], value: Object) {
  if (!listRequireData || !listRequireData.length) {
    return;
  }
  for (const key of listRequireData) {
    if (value[key] !== undefined) {
      value[key] = !!+value[key];
    }
  }
}

function convertToArrayNumber(listRequireData: string[], value: Object) {
  if (!listRequireData || !listRequireData.length) {
    return;
  }
  for (const key of listRequireData) {
    if (value[key] !== undefined) {
      if (typeof value[key] === 'string') {
        value[key] = [+value[key]];
        continue;
      }
      value[key] = (value[key] as any[]).map(data => +data);
    }
  }
}

function convertToArrayString(listRequireData: string[], value: Object) {
  if (!listRequireData || !listRequireData.length) {
    return;
  }
  for (const key of listRequireData) {
    if (value[key] !== undefined && typeof value[key] === 'string') {
      value[key] = [value[key]];
    }
  }
}

function applyDefaultValue(
  listRequireData: IAutoConvertDefaultValue[],
  value: Object,
) {
  if (!listRequireData || !listRequireData.length) {
    return;
  }
  for (const { key, defaultValue } of listRequireData) {
    if (value[key] === undefined) {
      value[key] = defaultValue;
    }
  }
}
