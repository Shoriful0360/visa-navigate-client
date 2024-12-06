

const Text = () => {
    return (
        <div className="relative group w-64 h-64">
        {/* Image */}
        <img
          src="https://media.istockphoto.com/id/176430982/vector/flag-of-the-brazil.jpg?s=612x612&w=0&k=20&c=dAwPAmV91dkqzDxyN35GHMwvHZvJjVykV5O-SdGlnE4="
          alt="Placeholder"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        {/* Hover Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xl font-semibold">I Love You</span>
        </div>
      </div>
    );
};

export default Text;