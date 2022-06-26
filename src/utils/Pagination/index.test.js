import { expect } from "chai";
import pagination from ".";

describe("Pagination", () => {
  it("should be a function", () => {
    expect(pagination).to.be.a("function");
  });

  it("pagination({total: 1, activePage: 1}) should return [1]", () => {
    const params = { total: 1, activePage: 1 };
    expect(pagination(params)).to.be.deep.equal([1]);
  });

  it("pagination({total: 2, activePage: 1}) should return [1, 2]", () => {
    const params = { total: 2, activePage: 1 };
    const result = [1, 2];
    expect(pagination(params)).to.be.deep.equal(result);
  });

  it("pagination({total: 5, activePage: 1}) should return [1, 2, 3, 4, 5]", () => {
    const params = { total: 5, activePage: 1 };
    const result = [1, 2, 3, 4, 5];
    expect(pagination(params)).to.be.deep.equal(result);
  });

  it("pagination({ total: 6, activePage: 1}) should return [1, 2, 3, '...', 6 ]", () => {
    const params = { total: 6, activePage: 1 };
    const result = [1, 2, 3, "...", 6];
    expect(pagination(params)).to.be.deep.equal(result);
  });

  it("pagination({ total: 6, activePage: 2}) should return [1, 2, 3, '...', 6 ]", () => {
    const params = { total: 6, activePage: 2 };
    const result = [1, 2, 3, "...", 6];
    expect(pagination(params)).to.be.deep.equal(result);
  });
  it("pagination({ total: 6, activePage: 3}) should return [1, 2, 3, '...', 6 ]", () => {
    const params = { total: 6, activePage: 3 };
    const result = [1, 2, 3, "...", 6];
    expect(pagination(params)).to.be.deep.equal(result);
  });

  it("pagination({ total: 6, activePage: 4}) should return [1, '...', 4, 5 , 6 ]", () => {
    const params = { total: 6, activePage: 4 };
    const result = [1, "...", 4, 5, 6];
    expect(pagination(params)).to.be.deep.equal(result);
  });
  it("pagination({ total: 6, activePage: 5}) should return [1, '...', 4, 5 , 6 ]", () => {
    const params = { total: 6, activePage: 5 };
    const result = [1, "...", 4, 5, 6];
    expect(pagination(params)).to.be.deep.equal(result);
  });
  it("pagination({ total: 15, activePage: 8}) should return [1, '...', 7, 8, 9, '...', 15 ]", () => {
    const params = { total: 15, activePage: 8 };
    const result = [1, "...", 7, 8, 9, "...", 15];
    expect(pagination(params)).to.be.deep.equal(result);
  });
  it("pagination({ total: 15, activePage: 9}) should return [1, '...', 8, 9, 10, '...', 15 ]", () => {
    const params = { total: 15, activePage: 9 };
    const result = [1, "...", 8, 9, 10, "...", 15];
    expect(pagination(params)).to.be.deep.equal(result);
  });
  it("pagination({ total: 15}) should return [1, 2, 3, '...', 15 ]", () => {
    const params = { total: 15 };
    const result = [1, 2, 3, "...", 15];
    expect(pagination(params)).to.be.deep.equal(result);
  });
  it("pagination() should return [1]", () => {
    const result = [1];
    expect(pagination()).to.be.deep.equal(result);
  });
  it("pagination({ total: 'abc', activePage: 9}) should throw an error", () => {
    const params = { total: "abc", activePage: 9 };
    const result = "Total must be a number";
    try {
      pagination(params);
    } catch (err) {
      expect(err.message).to.be.equal(result);
    }
  });
  it("pagination({ total: 15, activePage: 'adf'}) should throw an error", () => {
    const params = { total: 15, activePage: "adf" };
    const result = "Active page must be a number";
    try {
      pagination(params);
    } catch (err) {
      expect(err.message).to.be.equal(result);
    }
  });
});
