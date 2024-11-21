import isObject from "./isObject";

type NodeObject = object & { nodeType: number };

/**
 * Checks if an object is a `Node`.
 *
 * @param node the target object
 * @see https://dom.spec.whatwg.org/#node
 *
 * ```
 * ELEMENT_NODE = 1;
 * ATTRIBUTE_NODE = 2;
 * TEXT_NODE = 3;
 * CDATA_SECTION_NODE = 4;
 * ENTITY_REFERENCE_NODE = 5; // legacy
 * ENTITY_NODE = 6; // legacy
 * PROCESSING_INSTRUCTION_NODE = 7;
 * COMMENT_NODE = 8;
 * DOCUMENT_NODE = 9;
 * DOCUMENT_TYPE_NODE = 10;
 * DOCUMENT_FRAGMENT_NODE = 11;
 * @returns the query result
 */
const isNode = (node?: unknown): node is Node =>
  (isObject(node) &&
    typeof (node as NodeObject).nodeType === "number" &&
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((x) =>
      (node as NodeObject).nodeType === x
    )) ||
  false;

export default isNode;
