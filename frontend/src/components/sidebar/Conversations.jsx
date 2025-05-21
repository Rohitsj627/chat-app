import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = ({ selectedConversation, setSelectedConversation }) => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <div
          key={conversation._id}
          onClick={() => setSelectedConversation(conversation)}
        >
          <Conversation
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
            selectedConversation={selectedConversation}
          />
        </div>
      ))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};
export default Conversations;