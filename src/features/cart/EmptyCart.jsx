import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center gap-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="text-center font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
