declare const ObjectAssign: <A extends {}, B>(obj: A, ...source: B[]) => B extends any[] ? any : A & B;
export default ObjectAssign;
